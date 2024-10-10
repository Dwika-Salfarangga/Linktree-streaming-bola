const linkPC = {
  goaloo: "https://www.goaloo12.com",
  "808bola": "https://www.808bola116.com",
  "tigoals 1": "https://idn109.tigoals118.com",
  "tigoals 2": "https://idn00054.tigoals118.com",
};

const linkHP = {
  goaloo: "https://www.goaloo890.com",
  "808bola": "https://www.808bola116.com",
  "tigoals 1": "https://idn109.tigoals118.com",
  "tigoals 2": "https://idn00054.tigoals118.com",
  "duktek sports": "httpa://bit.ly/duktekpro",
  "phong nha": "https://xemphongnha-kebang.blogspot.com",
  ikotv: "https://ikotv.com",
};

let mode;

function hp() {
  while (mode != 0) {
    mode = 0;
    document.getElementById("hpButton").style.backgroundColor = "green";
    document.getElementById("pcButton").style.backgroundColor = "transparent";
    createDiv("hpView");
    createButton(linkHP, "hpView");
    removeDiv("content", "pcView");
  }
}

function pc() {
  while (mode != 1) {
    mode = 1;
    document.getElementById("pcButton").style.backgroundColor = "green";
    document.getElementById("hpButton").style.backgroundColor = "transparent";
    createDiv("pcView");
    createButton(linkPC, "pcView");
    removeDiv("content", "hpView");
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
    baru.href = object[x];
    baru.target = "_blank";
    baru.className = "textStyle";
    baru.innerHTML = x;

    newButton.appendChild(baru);
  }
}

function removeDiv(parent, child) {
  document.getElementById(parent).removeChild(document.getElementById(child));
}
