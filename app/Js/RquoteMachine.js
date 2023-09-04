const file = "app/Js/quotes.json"
let quotesArray

function getQuotes() {
    return fetch(file)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            quotesArray = data.quotes;
            console.log(data);
            console.log(quotesArray);
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
        });
}


function rndQ() {
    let random = Math.floor(Math.random() * quotesArray.length)
    let randomQuote = quotesArray[random]
    return randomQuote
}

function Q() {
    randomQuote = rndQ()
    $("#text").text(randomQuote.quote)
    $("#author p").text(randomQuote.author)

    let tweetUrl = "https://twitter.com/intent/tweet?hashtags=Quotes,StevenUniverse&text=" + encodeURIComponent(randomQuote.quote) + " - " + encodeURIComponent(randomQuote.author)
    $("#tweet-quote").attr("href", tweetUrl)

    let tumblrpostUrl = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quote,StevenUniverse&content=" + encodeURI(randomQuote.quote) + "&caption=" + encodeURIComponent(randomQuote.author) + "&canonicalUrl=https://random-quote-machine.freecodecamp.rocks/"
    $("#tumblr-post").attr("href", tumblrpostUrl)




}



$(document).ready(function () {
    getQuotes().then(() => {
        Q();
    });

    $("#new-quote").click(() => {
        Q()
    })
});