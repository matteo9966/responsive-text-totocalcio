import "./styles.css";

const smallestFont = 10;
const largestFont = 20;

const ListaSquadre1 = [
  "Lecce - Milan",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "ESPANYOL BARCELLONA-RAYO VALLE",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "BARI-LONDRA",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "Lecce - Milan",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "ESPANYOL BARCELLONA-RAYO VALLE",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "Lecce - Milan",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "ESPANYOL BARCELLONA-RAYO VALLE",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "ESPANYOL BARCELLONA-RAYO VALLE",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "Lecce - Milan"
];

const ListaSquadre2 = [
  "2 Lecce - QQQMilan",
  "2 UGMK QQQQJUNIOR YEKATERINBURG-MBKQQQQ",
  " 2 ESPANYOL BARCELQQQQLONA-RAYO VALLE",
  "2 BARI-LONDRA",
  " 2 UGMQQQQK JUNIOR YEKATERINBURG-MBK",
  " 2 ESPANQQQYOL BARCELLONA-RAYO VALLE",
  " 2  UGMK JUNIOR YEKATERINBURG-MBK",
  " 2 ESPANYOL BARCELLONA-RAYO VALLE",
  " 2 UGMK JUNIOR YEKATERINBURG-MBK",
  "2 Lecce - Milan",
  "2 UGMK JUNIOR YEKATERINBURG-MBK",
  " 2 ESPANYOL BARCELLONA-RAYO VALLE",
  " 2 UGMK JUNIOR YEKATERINBURG-MBK",
  " 2 ESPANYOL BARCELLONA-RAYO VALLE",
  " 2  UGMK JUNIOR YEKATERINBURG-MBK"
];

//1 conta quanti caratteri entrano in ciascun range di pixel

const containers = document.querySelectorAll(".container");
const textFieldSquadre = document.querySelectorAll(".wrapper");
const mainContainer = document.querySelector(".grid");

const btn1 = document.getElementById("squadre1");
const btn2 = document.getElementById("squadre2");

const mutationObserver = new MutationObserver((event) => {
  updateInputs();
});

const mutationOptions = {
  subtree: true,
  characterData: true,
  childList: true
};

mutationObserver.observe(mainContainer, mutationOptions);

const updateInputs = () => {
  containers.forEach((container) => {
    const child = container.querySelector(".wrapper");
    child.style.removeProperty("font-size");
    const contWidth = container.offsetWidth;
    let childWidth = child.offsetWidth;
    console.log(contWidth, childWidth);
    let start = largestFont;
    while (childWidth > contWidth && start > smallestFont) {
      child.style.fontSize = `${start}px`;
      childWidth = child.offsetWidth;
      start--;
    }
  });
};

const updateFields = (elencosquadre) => {
  textFieldSquadre.forEach((field, index) => {
    field.innerHTML = elencosquadre[index];
  });
};

btn1.addEventListener("click", (event) => {
  updateFields(ListaSquadre1);
});
btn2.addEventListener("click", (event) => {
  updateFields(ListaSquadre2);
});

//questo è un workaround per farlo funzionare su codesandbox! nella vita vera usa l'evento 'load'

setTimeout(() => {
  updateInputs();
}, 10);

// window.addEventListener('load', (event) => {
//   updateInputs();
// });
