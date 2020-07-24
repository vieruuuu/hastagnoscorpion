// eslint-disable-next-line no-unused-vars
import { Caracter } from "./typedefs.js";
// eslint-disable-next-line no-unused-vars
import { getRandom, render } from "./functions.js";
import { Caractere } from "./data/index.js";

const { mk9 } = Caractere;

/**
 * pe asta se randeaza caracterele
 */
const element = document.getElementById("box-holder");

render(element, [...mk9]);

const banBtn = document.getElementById("button1");

const banBtnHandler = () => {
  banBtn.setAttribute("disabled", true);
  element.classList.add("box-holderr");
  loop(0, () => {
    banBtn.removeAttribute("disabled");
  });
};

/**
 * loopul ce permite o semi animatie de ruleta
 * necesar pt banBtnHandler
 * @param {number} i trebuie sa fie neaparat 0
 * @param {Function} cb ce sa fie executat dupa terminarea loop-ul
 */
const loop = (i = 0, cb) => {
  if (i === 10) {
    cb();
    return;
  }

  const chr1 = getRandom(mk9);
  const c1 = chr1.Caracter;
  const chr2 = getRandom(chr1.Caractere);
  const c2 = chr2.Caracter;
  const chr3 = getRandom(chr2.Caractere);
  const c3 = chr3.Caracter;
  const chr4 = getRandom(chr3.Caractere);
  const c4 = chr4.Caracter;
  const bannedChrs = [c1, c2, c3, c4];

  render(element, bannedChrs);

  setTimeout(() => {
    loop(i + 1, cb);
  }, 100);
};

banBtn.addEventListener("click", banBtnHandler);
