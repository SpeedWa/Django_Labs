
var foldBtns = document.getElementsByClassName("fold-button");

for (var i = 0; i < foldBtns.length; i++) {
    foldBtns[i].addEventListener("click", function (event) {
    /*
        if (event.target.className === "fold-button folded") {
            event.target.innerHTML = "свернуть";
            event.target.className = "fold-button";
            var displayState = "block";
        } else {
            event.target.innerHTML = "развернуть";
            event.target.className = "fold-button folded";
            var displayState = "none";
        }
        event.target
            .parentElement
            .parentElement
            .getElementsByClassName('article-info')[0]
            .style.display = displayState;
        event.target
            .parentElement
            .parentElement
            .getElementsByClassName('article-text')[0]
            .style.display = displayState;
      */
      event.target.innerHTML = event.target.innerHTML === "Свернуть" ? "Развернуть" : "Свернуть"
      event.target
            .parentElement
            .parentElement.classList.toggle("article_hidden")

    });
}

