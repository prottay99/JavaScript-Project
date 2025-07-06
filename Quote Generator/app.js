const quote = document.getElementById("blockquote");
const author = document.getElementById("author");

const api__url = "https://dummyjson.com/quotes/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerHTML = data.quote;
  author.innerHTML = data.author;
}

function post() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "     --" +
      author.innerHTML,
    "Tweet Window",
    "width=600,height=400"
  );
}

getQuote(api__url);
