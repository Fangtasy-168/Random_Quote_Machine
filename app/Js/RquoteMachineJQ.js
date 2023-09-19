// jquery version javascript of the quote machine

const file = "app/Js/quotes.json"
const link = "https://gist.githubusercontent.com/dragonofnyc0218/367842b9afc9ac978e06a79fa863ef61/raw/01ffaf13593987b8d04ce6f2069e224d8e5b2c18/gistfile1.json"

function getQ() {
    return $.ajax({
        url: link,
        type: "get",
        dataType: "json",
        success: function (data) {
            console.log(data)
            quotes = data.quotes
            console.log("fetch completed")
        },
        error: function (xhr, status, error) {
            console.log("Error: ", error)
            console.log("fetch completed")
        }
    })
}

function RndQ() {
    let randomIndex = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[randomIndex]["quote"]
    let randomAuthor = quotes[randomIndex]["author"]

    $("#text").text(randomQuote)
    $("#author p").text(randomAuthor)

    let tweetUrl = "https://twitter.com/intent/tweet?" + $.param({
        hashtags: "quote,StevenUniverse",
        text: randomQuote + "-" + randomAuthor,
    })
    let tumblrPostUrl = "https://www.tumblr.com/widgets/share/tool?" + $.param({
        posttype: "quote",
        tags: "quote,StevenUniverse",
        content: randomQuote,
        caption: randomAuthor,
        canonicalUrl: "https://random-quote-machine.freecodecamp.rocks/"
    })

    $("#tweet-quote").attr("href", tweetUrl)
    $("#tumblr-post").attr("href", tumblrPostUrl)
}

$(document).ready(() => {
    getQ().then(() => {
        RndQ()
    })

    $("#new-quote").click(RndQ)

})
