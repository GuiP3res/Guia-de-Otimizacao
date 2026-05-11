function getJogo() {
  const params = new URLSearchParams(window.location.search);
  return params.get("jogo");
}

async function carregarConquistas() {
  const jogo = getJogo();

  let arquivo = "";

  if (jogo === "rdr2") arquivo = "data/rdr2.json";
  if (jogo === "gow") arquivo = "data/gow_ragnarok.json";
  if (jogo === "spiderman") arquivo = "data/spiderman2.json";
  if (jogo === "cyberpunk") arquivo = "data/cyberpunk.json";

  const res = await fetch(arquivo);
  const data = await res.json();

  document.getElementById("titulo-jogo").innerText = data.jogo;

  const container = document.getElementById("conquistas");

  data.conquistas.forEach(c => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${c.nome}</h3>
      <p>${c.descricao}</p>
      <hr>
    `;

    container.appendChild(div);
  });
}

carregarConquistas();