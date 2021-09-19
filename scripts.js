document.addEventListener("DOMContentLoaded", function () {

    let btn = document.createElement("button");
    btn.id = "btn-id"
    btn.innerHTML = "Add Square"
    let counter = 1

    document.body.appendChild(btn);

    let container = document.createElement("container")
    document.body.appendChild(container);

    document.getElementById(btn.id).onclick = function () {
        let square = document.createElement("div");
        document.body.appendChild(square);
        container.appendChild(square);
        square.className = "square"
        square.id = counter++

        square.addEventListener("mouseover", function () {
            square.innerHTML = square.id;
        })

        square.addEventListener("mouseout", function () {
            square.innerHTML = ""
        })

        square.addEventListener("click", function () {
            let colors = ["#F4A381", "#01ABA9", "#ffdc40", "#3b80b0", "#9968fe", "#c818d0", "#1ae60", "#e55e19"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.color = randomColor
        })

        square.addEventListener("dblclick", function () {

            if ((square.id % 2 == 0) && (square.nextElementSibling === null)) {
                alert("There isn't a square to remove after the clicked square!")
            } else if (square.id % 2 == 0) {
                square.nextElementSibling.remove()
            } else if (square.previousElementSibling === null) {
                alert("There isn't a square to remove before the clicked square!")
            } else {
                square.previousElementSibling.remove()
            }
        })
    }
})