/*
Multyline comment for the file.

This will be the main script with the common functions.

*/




// single line comment for the function
async function loadPart(id, url) {
  const html = await fetch(url).then(r => r.text());
  document.getElementById(id).innerHTML = html;
}


loadPart("header", "/portfolio_public/helpers/header.html");
loadPart("menu", "https://gergovassilev.github.io/portfolio_public/helpers/menu.html");
loadPart("footer", "https://gergovassilev.github.io/portfolio_public/helpers/footer.html");