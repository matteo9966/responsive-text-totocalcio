import "./styles.css";

const smallestFont = 10;
const largestFont = 20;

const ListaSquadre1 = [
  "1111111Lecce - Milan",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "ESPANYOL BARCELLONA-RAYO VALLE",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "BARI-LONDRA",
  "UGMK JUNIOR YEKAT11111ERINBURG-MBK",
  "Lecce - Milan",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "ESPANYOL B11111ARCELLONA-RAYO VALLE",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "Lecce - Milan",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "ESPANYOL BARCELL1111ONA-RAYO VALLE",
  "UGMK JUNIOR YEKATE1111RINBURG-MBK",
  "ESPANYOL BARCE111LLONA-RAYO VALLE",
  "UGMK JUNIOR YEKATERINBURG-MBK",
  "Lecce - Milan"
];

const ListaSquadre2 = [
  "2 Lecce - QQQMilan",
  "2 UGMK QQQQJUNIOR YEKA111TERINBURG-MBKQQQQ",
  " 2 ESPANYOL BARCELQQQQLONA-545454RAYO VALLE",
  "2 BARI-LONDRA",
  " 2 UGMQQQQK JUNIO111R YEKATERINBURG-MBK",
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

const ListaSquadre3 = [
  "3 Lecce - QQQMilan",
  "3 UGMK3333333333 QQQQJUNIOR YEKA111TERINBURG-MBKQQQQ",
  " 3 ESPANYOL33333 BARCELQQQQLONA-545454RAYO VALLE",
  "3 BARI-LONDRA",
  " 3 UGMQQQQK JUNIor",
  " 3 ESPANQQQYOL 33333333333333333333333333333333333333333E",
  " 3  UGMK JUNIOR YEKATERINBURG-MBK",
  " 3 ESPANYOL BARCELLONA-RAYO VALLE",
  " 3 UGMK JUNIOR YEKATERINBURG-MBK",
  "3 Lecce - Milan",
  "3 UGMK JUNIOR YEKATERINBURG-MBK",
  " 3 ESPANYOL BARCELLONA-RAYO VALLE",
  " 3 UGMK JUNIOR YEKATERINBURG-MBK",
  " 3 ESPANYOL BARCELLONA-RAYO VALLE",
  " 3  UGMK JUNIOR YEKATERINBURG-MBK"
];

//1 conta quanti caratteri entrano in ciascun range di pixel

const containers = document.querySelectorAll(".container");
const textFieldSquadre = document.querySelectorAll(".wrapper");
const mainContainer = document.querySelector(".grid");
const btn1 = document.getElementById("squadre1");
const btn2 = document.getElementById("squadre2");
const btn3 = document.getElementById("squadre3");
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
btn3.addEventListener("click", (event) => {
  updateFields(ListaSquadre3);
});

//questo è un workaround per farlo funzionare su codesandbox! nella vita vera usa l'evento 'load'

setTimeout(() => {
  updateInputs();
}, 10);

// window.addEventListener('load', (event) => {
//   updateInputs();
// });
