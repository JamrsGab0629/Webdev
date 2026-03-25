import fs from "fs/promises";

export default class JsonHandler {
  #file;
  constructor(file = "./DataBase/database.json") {
    this.#file = file;
  }
  async save(data) {
    try {
      const jsonobject = JSON.stringify(data, 2, null);
      await fs.writeFile(this.#file, jsonobject);
      return true;
    } catch (err) {
      console.log("Error on saving", err.message);
      return false;
    }
  }
  async load() {
    try {
      const rawdata = await fs.readFile(this.#file, "utf-8");
      return JSON.parse(rawdata);
    } catch (err) {
      return null;
    }
  }
}
