const btnWhite = document.querySelector("#white")
const btnBlack = document.querySelector("#black")
const btnBlue = document.querySelector("#blue")
const btnOrange = document.querySelector("#orange")
const btnPink = document.querySelector("#pink")
const btnGrey = document.querySelector("#grey")
const btnGold = document.querySelector("#gold")
const productImg = document.querySelector(".product img")

function changeImg(path) {
    productImg.classList.toggle("fadeJS")
    productImg.setAttribute("src", path)

    setTimeout(() => {
        productImg.classList.toggle("fadeJS")
    }, 400);
}

btnWhite.addEventListener("click", () => {
    changeImg(path = "/public/orange.opti.webp")

    btnBlue.addEventListener("click", () => {
        changeImg(path = "/public/azul-off.opti.webp")
    })

    btnOrange.addEventListener("click", () => {
        changeImg(path = "/public/orange.opti.webp")
    })

    btnPink.addEventListener("click", () => {
        changeImg(path = "/public/pink.opti.webp")
    })

    btnGrey.addEventListener("click", () => {
        changeImg(path = "/public/grey.opti.webp")
    })

    btnGold.addEventListener("click", () => {
        changeImg(path = "/public/gold.opti.webp")
    })
})

btnBlack.addEventListener("click", () => {
    changeImg(path = "/public/orange-dark.opti.webp")

    btnBlue.addEventListener("click", () => {
        changeImg(path = "/public/azul-off-dark.opti.webp")
    })

    btnOrange.addEventListener("click", () => {
        changeImg(path = "/public/orange-dark.opti.webp")
    })

    btnPink.addEventListener("click", () => {
        changeImg(path = "/public/pink-dark.opti.webp")
    })

    btnGrey.addEventListener("click", () => {
        changeImg(path = "/public/grey-dark.opti.webp")
    })

    btnGold.addEventListener("click", () => {
        changeImg(path = "/public/gold-dark.opti.webp")
    })

})





