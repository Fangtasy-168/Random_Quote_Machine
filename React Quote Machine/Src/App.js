import React, { useState, useContext } from "react"
import Data from './quotes.json'
// const link = "https://gist.githubusercontent.com/dragonofnyc0218/367842b9afc9ac978e06a79fa863ef61/raw/01ffaf13593987b8d04ce6f2069e224d8e5b2c18/gistfile1.json"
// async function getQuotes(){
//     try{
//         let response = await fetch(file)
//         let data = await response.json()
//         let quotesArray = data.quotes
//         console.log(quotesArray)
//     } catch (error) {
//         console.log('Failed to obtain Json File', error)
//     } finally {
//         console.log('Attempt to get Quotes Completed')
//     }
// }

let quotesArray = Data.quotes

export default function QuoteMachine() {
    const [currentQuote, setCurrentQuote] = useState(quotesArray[0])

    function handleNewQuoteClick() {
        let random = Math.floor(Math.random() * quotesArray.length)
        let randomQuote = quotesArray[random]
        setCurrentQuote(randomQuote)
    }
    if (currentQuote.author == "Steven Universe") {
        console.log('potato')
    }

    return (
        <div id='container'>
            <Display
                quote={currentQuote.quote}
                author={currentQuote.author}
            />
            <div id="buttonContainer">
                <Socials
                    quote={currentQuote.quote}
                    author={currentQuote.author}
                />
                <NewQuote nextQuote={handleNewQuoteClick} />
            </div>
        </div>
    )
}
function Display({ quote, author }) {
    return (
        <div id="display">
            <div id="quote">
                {quote}
            </div>
            <div id="author">
                - {author}
            </div>
        </div>
    )
}

function Socials({ quote, author }) {

    let twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} - ${encodeURIComponent(author)}`

    let tumblrLink = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quote,StevenUniverse&content=${encodeURI(quote)}&caption=${encodeURIComponent(author)}&canonicalUrl=https://random-quote-machine.freecodecamp.rocks/`

    return (
        <div id="socials">
            <a id="tweet-quote"
                title="Tweet this Quote"
                className="socialAction"
                href={twitterLink}
                target="_blank">
                <i class="fab fa-twitter"></i>
            </a>
            <a id="tumblr-post"
                className="socialAction"
                href={tumblrLink}
                target="_blank">
                <i className="fab fa-tumblr"></i>
            </a>
        </div>
    )
}

function NewQuote({ nextQuote }) {
    return (
        <div id='nextQuote' onClick={nextQuote}>
            New Quote
        </div>
    )
}

