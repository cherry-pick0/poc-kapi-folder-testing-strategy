import Person from "../../../domain/entities/Person";

export type GetPeopleResponse = {
  allPeople: {
    people: Person[];
  };
};
