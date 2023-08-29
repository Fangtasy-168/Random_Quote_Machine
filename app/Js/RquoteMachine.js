function func() {
    fetch("Js/quotes.json")
        .then((quotes) => {
            return quotes.json();
        })
        .then(data => { console.log(data) })

        .catch(error => {
            console.error("Error fetching JSON:", error);
        });
}