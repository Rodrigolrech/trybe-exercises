let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrent: "Sim"
};

console.log("Bem-vinda, " + info.personagem);

info['recorrent'] = 'Sim';

for (key in info){
  console.log(key);
}

for (key in info){
  console.log(info[key]);
}

for (key in info && info2) {
   
    if (info[key] != info2[key]){
    console.log(info[key] + " e " + info2[key]);
    }else {
      console.log("Ambos Recorrentes")
    }
}

