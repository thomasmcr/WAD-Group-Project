const nextE1 = document.querySelector(".next")
const prevE1 = document.querySelector(".prev")

let timeout ;



var width = window.innerWidth;
amount=width*0.7;
console.log(amount);


// const numberOfImages = document.querySelectorAll("img")
const numberOfImages = [0,0,0,0,0,0,0];
console.log(numberOfImages);

const imageContainerE1 = document.querySelector('.image-Container')

let currentImage = 1

nextE1.addEventListener("click", ()=>{



    currentImage++
    clearTimeout(timeout)
    updateImage()
})

prevE1.addEventListener("click", ()=>{
    


    currentImage--
    clearTimeout(timeout)
    updateImage()
})


updateImage()

function updateImage(){


    var width = window.innerWidth;
    amount=width*0.7;
    console.log(amount);


    if (currentImage>numberOfImages.length){
        currentImage=1
    }

    if (currentImage<1){
        currentImage=numberOfImages.length
    }
    imageContainerE1.style.transform = `translateX(${(currentImage-1)*-amount}px)`

    timeout = setTimeout(()=>{
        currentImage++
        updateImage()
    }, 3000)
}


