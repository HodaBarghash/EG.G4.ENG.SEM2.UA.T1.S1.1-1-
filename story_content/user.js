function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5eMoit5LO3p":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxqZHECHy2DCDsA7TX1CFmCALF-uNaKrTvlA8cSGSpDMNd8-pnamJhqJrwhezx47N87/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

