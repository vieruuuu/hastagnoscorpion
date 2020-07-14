// eslint-disable-next-line no-unused-vars
import { Caracter } from "./typedefs.js";
import { getRandom, render } from "./functions.js";
import { Caractere } from "./data/index.js";

const { mk9 } = Caractere;

/**
 * pe asta se randeaza caracterele
 */
const element = document.getElementById("box-holder");

render(element, [...mk9]);
