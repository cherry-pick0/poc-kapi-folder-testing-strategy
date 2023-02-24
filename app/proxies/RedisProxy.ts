const redis = require("redis")
import { RedisClientType } from "redis"
//import redis from "redis"

const RedisProxy = async () => {
  const redisClient: RedisClientType = redis.createClient({
    socket: {
      host: "localhost",
      port: 6379,
    },
    password: "",
  })
  
  redisClient.on("error", (err) => {
    console.log("Redis error: " + err)
  })

  return redisClient
}

export default RedisProxy
