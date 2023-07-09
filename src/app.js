
const btnColors = document.querySelectorAll(".tune-colors input[name='color']");
const productImg = document.querySelector(".product img")

function changeImg(pathImg, frameColor, boardColor, ) {
    productImg.setAttribute("src", pathImg)
    productImg.style.filter = "grayscale(0)"
    productImg.setAttribute("alt", "Placa com QR Code" + " " + frameColor + " " + "personalizada" + " " + "com detalhes em" + " " + boardColor)
    

}

for (let detailColor of btnColors) {

    detailColor.addEventListener('change', function (event) {

        let boardColor = document.querySelector("input[name='tone']:checked");
        if (!boardColor) {
            alert('Ops, Escolha a cor da placa antes 😉');

            return;
        }

        switch (boardColor.value) {
            case "white":
                changeImg(
                    pathImg = detailColor.dataset.toneWhite,
                    frameColor = "Branca" ,
                    boardColor = detailColor.ariaLabel
                    )
                break;
            case "black":
                changeImg(
                    pathImg = detailColor.dataset.toneBlack,
                    frameColor = "Preta" ,
                    boardColor = detailColor.ariaLabel
                    )
            default:
                break;
        }
    });
}


// animations

const reveralUP = document.querySelectorAll(".animation-up")
const reveralLeft = document.querySelectorAll(".animation-left")
const reveralGirl = document.querySelectorAll(".girlAnimation")

const animationUP = () => {

    reveralUP.forEach((e) => {
        let windowHeight = window.innerHeight
        let elementAtTop = e.getBoundingClientRect().top
        let elementVisible = 10

        if (elementAtTop < windowHeight - elementVisible) {
            e.classList.add("reveral-up")
        } else {
            e.classList.remove("reveral-up")
        }
    });
}

window.addEventListener("scroll", animationUP)

const animationLeft = () => {

    reveralLeft.forEach((e) => {
        let windowHeight = window.innerHeight
        let elementAtTop = e.getBoundingClientRect().top
        let elementVisible = 10

        if (elementAtTop < windowHeight - elementVisible) {
            e.classList.add("reveral-left")
        } else {
            e.classList.remove("reveral-left")
        }
    });
}
window.addEventListener("scroll", animationLeft)

const animationGirl = () => {

    reveralGirl.forEach((e) => {
        let windowHeight = window.innerHeight
        let elementAtTop = e.getBoundingClientRect().top
        let elementVisible = 200

        if (elementAtTop < windowHeight - elementVisible) {
            e.classList.add("girlAnimationOn")
        } else {
            e.classList.remove("girlAnimationOn")
        }
    });
}

window.addEventListener("scroll", animationGirl)






//svg-dg-qrcode

