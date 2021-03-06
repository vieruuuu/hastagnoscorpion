// eslint-disable-next-line no-unused-vars
import { Caracter } from "./typedefs.js";

/**
 * returneaza un Caracter random si o lista noua
 * @param {Caracter[]} Caractere un array cu Caracterele
 * @returns {{Caractere: Caracter[], Caracter: Caracter}} un Caracter si arrayul fara el
 * @example
 * let run1 = getRandom(Caractere);
 *
 * // afiseaza caracterul x si un array fara x
 * console.log(run1);
 *
 * let run2 = getRandom(run1.Caractere);
 *
 * // afiseaza caracterul y si un array fara y si x
 * console.log(run2)
 *
 */
export function getRandom(Caractere) {
  const len = Caractere.length;

  const numarRandom = Math.floor(Math.random() * len);

  const CaractereNoi = Caractere.filter((_, index) => index !== numarRandom);

  return {
    Caracter: Caractere[numarRandom],
    Caractere: CaractereNoi,
  };
}

/**
 * template pentru functia render
 * @param {Caracter} caracter
 * @returns {string} htmlul pentru un caracter
 */
const template = (caracter) =>
  `<div class="box">
    <p>${caracter.name}</p>
    <img src="./../assets/characters/${caracter.url}" alt="${caracter.name}" />
   </div>`;

/**
 * afiseaza o lista de caractere folosind un template
 * @param {HTMLElement} element elementul in care afiseze caracterele
 * @param {Caracter[]} data un array cu caractere
 * @returns {Void}
 */
export function render(element, data) {
  let renderedData = "";

  for (let i = 0; i < data.length; i++) {
    const caracter = data[i];

    renderedData += template(caracter);
  }

  element.innerHTML = renderedData;
}
