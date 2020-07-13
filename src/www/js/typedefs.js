/**
 * o clasa pentru un caracter
 */
export class Caracter {
  /**
   * @param {string} name numele caracterului
   * @param {string} url url sau path catre poza
   */
  constructor(name, url = "") {
    this.name = name;
    this.url = url;
  }
}
