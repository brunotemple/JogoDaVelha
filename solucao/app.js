const playerX = "X";
const playerO = "O";
let jogadorAtual = playerX;

const tabuleiroBoxes = Array.from(document.getElementsByClassName("box"));
const botaoReiniciar = document.getElementById("reiniciarBtn");

const possibilidatesVencedoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const empatado = () => {
  return tabuleiroBoxes.every((box) => box.innerText !== "");
};

const temVencendor = () => {
  let vencedorExiste = false;
  possibilidatesVencedoras.forEach((sequenciaVencedora) => {
    const check0 = tabuleiroBoxes[sequenciaVencedora[0]].innerText;
    const check1 = tabuleiroBoxes[sequenciaVencedora[1]].innerText;
    const check2 = tabuleiroBoxes[sequenciaVencedora[2]].innerText;

    if (check0 === check1 && check1 === check2 && check2 !== "") {
      vencedorExiste = true;
    }
  });

  return vencedorExiste;
};

const fazerJogada = (event) => {
  if (event.target.innerText !== "") return;
  if (temVencendor() || empatado()) return;

  event.target.innerText = jogadorAtual;

  const vencedor = temVencendor();
  if (vencedor) {
    alert(`${jogadorAtual} e o grande vencedor vencedor`);
  }
  if (!vencedor && empatado()) {
    alert("Zuado! empatou.");
  }

  jogadorAtual = jogadorAtual === playerX ? playerO : playerX;
};

const iniciarJogo = () => {
  jogadorAtual = playerX;

  tabuleiroBoxes.forEach((box) => {
    box.innerText = "";
    box.addEventListener("click", fazerJogada);
  });
};

botaoReiniciar.addEventListener("click", iniciarJogo);

iniciarJogo();
