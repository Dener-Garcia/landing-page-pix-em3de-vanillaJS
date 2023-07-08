const btnWhite = document.querySelector("#white")
const btnBlack = document.querySelector("#black")
const btnBlue = document.querySelector("#blue")
const btnOrange = document.querySelector("#orange")
const btnPink = document.querySelector("#pink")
const btnGrey = document.querySelector("#grey")
const btnGold = document.querySelector("#gold")
const productImg = document.querySelector(".product img")

function changeImg(path) {
 
    productImg.setAttribute("src", path)
    productImg.classList.add("fadeJS")
    productImg.style.filter = "grayscale(0)"

    setTimeout(() => {
        productImg.classList.remove("fadeJS")
    }, 200);
}

btnWhite.addEventListener("click", () => {
    changeImg(path = "/public/orange.opti.webp")
    productImg.style.filter = "grayscale(1)"

    btnBlue.addEventListener("click", () => {
        changeImg(path = "/public/azul-off.opti.webp")
        btnWhite.focus()
    })

    btnOrange.addEventListener("click", () => {
        changeImg(path = "/public/orange.opti.webp")
        btnWhite.focus()
    })

    btnPink.addEventListener("click", () => {
        changeImg(path = "/public/pink.opti.webp")
        btnWhite.focus()
    })

    btnGrey.addEventListener("click", () => {
        changeImg(path = "/public/grey.opti.webp")
        btnWhite.focus()
    })

    btnGold.addEventListener("click", () => {
        changeImg(path = "/public/gold.opti.webp")
        btnWhite.focus()
    })
})

btnBlack.addEventListener("click", () => {
    changeImg(path = "/public/orange-dark.opti.webp")
    productImg.style.filter = "grayscale(1)"

    btnBlue.addEventListener("click", () => {
        changeImg(path = "/public/azul-off-dark.opti.webp")
        btnBlack.focus()
    })

    btnOrange.addEventListener("click", () => {
        changeImg(path = "/public/orange-dark.opti.webp")
        btnBlack.focus()
    })

    btnPink.addEventListener("click", () => {
        changeImg(path = "/public/pink-dark.opti.webp")
        btnBlack.focus()
    })

    btnGrey.addEventListener("click", () => {
        changeImg(path = "/public/grey-dark.opti.webp")
        btnBlack.focus()
    })

    btnGold.addEventListener("click", () => {
        changeImg(path = "/public/gold-dark.opti.webp")
        btnBlack.focus()
    })
})

// animations

const reveralUP = document.querySelectorAll(".animation-up")
const reveralLeft = document.querySelectorAll(".animation-left")
const reveralGirl = document.querySelectorAll(".girlAnimation")

const animationUP = () =>{

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

const animationLeft = () =>{

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

    const animationGirl = () =>{

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

