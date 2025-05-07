const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");

const getNewQuote = async () => {
  const url = "https://dummyjson.com/quotes/random";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }

    const quoteData = await response.json();

    const quote = quoteData.quote; 
    const auth = quoteData.author || "Anonymous"; 

    text.innerHTML = quote;
    author.innerHTML = "~ " + auth;

    tweetButton.href =
      "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " ~ " + auth);
  } catch (error) {
    console.error("Error fetching the quote:", error);
    text.innerHTML = "Failed to load quote. Please try again later.";
    author.innerHTML = "";
  }
};

getNewQuote();