// Fazer Requisição
function fazerRequisicao() {
  var url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.setRequestHeader("git-user", "Marck0s");
  xhttp.send(); //A execução do script pára aqui até a requisição retornar do servidor

  var myObj = JSON.parse(xhttp.responseText);
  return myObj.Result;
}

// Lógica e separação dos times em grupo
const randomizarTime = (times) => times.sort(() => Math.random() - 0.5);

function separarGrupos(times) {
  let timesRandom = randomizarTime(times);
  let groups = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const randomTimeReduce = timesRandom.reduce((past, now, index) => {
    let obj = past;

    if (
      !obj[groups[parseInt(index / 4)]] ||
      obj[groups[parseInt(index / 4)]].length == 0
    ) {
      obj[groups[parseInt(index / 4)]] = [now.Name];
    } else {
      obj[groups[parseInt(index / 4)]].push(now.Name);
    }
    return obj;
  });

  randomTimeReduce.a.push(randomTimeReduce.Name);
  delete randomTimeReduce.Name;
  delete randomTimeReduce.Token;

  console.log(randomTimeReduce);
}

const setDataIntoHtml = (data) => {
  let text = document.getElementById("separe");
  text.append('teste');
};

const times = fazerRequisicao();
const timesSeparados = separarGrupos(times);
