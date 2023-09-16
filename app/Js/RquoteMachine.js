const file = "app/Js/quotes.json"

// async function getQuotes() {
//     try {
//         const response = await fetch(file);
//         const data = await response.json();
//         quotesArray = data.quotes;
//         console.log(data);
//         console.log(quotesArray);
//     } catch (error) {
//         console.error("Error fetching JSON:", error);
//     }
// }

async function getQuotes() {
    try {
        response = await fetch(file)
        data = await response.json()
        quotesArray = data.quotes
        console.log(quotesArray)
    }
    catch (error) {
        console.log("Failed to obtain Json File", error)
    }
    finally {
        console.log("Attempt to get Quotes Completed")
    }
}


function rndQ() {
    let random = Math.floor(Math.random() * quotesArray.length)
    let randomQuote = quotesArray[random]
    return randomQuote
}

function Q() {
    randomQuote = rndQ()
    document.querySelector("#text").textContent = randomQuote.quote
    document.querySelector("#author p").textContent = randomQuote.author

    let tweetUrl = "https://twitter.com/intent/tweet?hashtags=Quotes,StevenUniverse&text=" + encodeURIComponent(randomQuote.quote) + " - " + encodeURIComponent(randomQuote.author)
    document.querySelector("#tweet-quote").setAttribute("href", tweetUrl)

    let tumblrpostUrl = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quote,StevenUniverse&content=" + encodeURI(randomQuote.quote) + "&caption=" + encodeURIComponent(randomQuote.author) + "&canonicalUrl=https://random-quote-machine.freecodecamp.rocks/"
    document.querySelector("#tumblr-post").setAttribute("href", tumblrpostUrl)

}

document.addEventListener("DOMContentLoaded", function () {
    getQuotes().then(() => {
        Q()
    })

    document.querySelector("#new-quote").addEventListener("click", () => {
        Q()
    })

})
