export class Dog {
  id!: string;
  name!: string;
  age!: number;
}

const DogsDB = new Map<string, Dog>();

DogsDB.set("winnie-the-poodle", {
  id: "winnie-the-poodle",
  name: "Winnie the Poodle",
  age: 7
});

export { DogsDB };