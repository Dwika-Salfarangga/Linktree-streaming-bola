const linkPC = {
  goaloo: "https://www.goaloo12.com/",
  "808bola": "https://www.808bola116.com/",
  "tigoals 1": "https://idn109.tigoals118.com/",
  "tigoals 2": "https://idn00054.tigoals118.com/",
};

const linkHP = {
  goaloo: "https://www.goaloo890.com/",
  "808bola": "https://www.808bola116.com/",
  "tigoals 1": "https://idn109.tigoals118.com/",
  "tigoals 2": "https://idn00054.tigoals118.com/",
  "duktek sports": "https://nobar-bola.duktek.online/",
  "phong nha": "https://xemphongnha-kebang.blogspot.com/",
  ikotv: "https://ikotv.top/",
};

let mode;

function hp() {
  while (mode != 0) {
    createDiv("hpView");
    createButton(linkHP, "hpView");
    removeDiv("content", "pcView");
    mode = 0;
  }
}

function pc() {
  while (mode != 1) {
    createDiv("pcView");
    createButton(linkPC, "pcView");
    removeDiv("content", "hpView");
    mode = 1;
  }
}

function createDiv(id) {
  const content = document.getElementById("content");
  const divBaru = document.createElement("div");
  divBaru.className = "linkButton";
  divBaru.id = id;
  content.appendChild(divBaru);
}

function createButton(object, target) {
  for (let x in object) {
    const newButton = document.getElementById(target);
    const baru = document.createElement("a");
    baru.innerHTML = x;
    baru.href = object[x];
    baru.target = "_blank";

    newButton.appendChild(baru);
  }
}

function removeDiv(parent, child) {
  document.getElementById(parent).removeChild(document.getElementById(child));
}
