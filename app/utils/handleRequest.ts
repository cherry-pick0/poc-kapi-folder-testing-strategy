import type { Response } from "express"

const handleRequest = async <T>(
  res: Response<T | string>,
  handler: () => Promise<T>
) => {
  try {
    const result = await handler()
    res.status(200).send(result)
  } catch (e) {
    console.log(e)
    res.status(500).send((e as Error).message)
  }
}

export default handleRequest
