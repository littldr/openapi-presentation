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

DogsDB.set("broken-dog", {
  id: "broken-dog",
  name: 123,
  age: 7
} as any);

export { DogsDB };