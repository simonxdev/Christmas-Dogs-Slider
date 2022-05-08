const previous = document.getElementById("previous")
const next = document.getElementById("next")
const img = document.getElementById("img")
const previouslabel = document.getElementById("previouslabel")
const santa = document.getElementById("santa")
const zoomin = document.getElementById("zoomin")
const zoomout = document.getElementById("zoomout")
const imgs = [
    {src: "imgs/photo-1545767962-45bdf193fd62.jfif",
    alt: "Dogs Picture 1"},
    {src: "imgs/photo-1575499888073-f93b8403cdf6.jfif",
    alt: "Dogs Picture 2"},
    {src: "imgs/photo-1608096281339-5bcae1ec2f12.jfif",
    alt: "Dogs Picture 3"},
    {src: "imgs/photo-1608096299230-81c7b43d5dfc.jfif",
    alt: "Dogs Picture 4"}]

let imgNum = 0

previous.addEventListener("click", function(){ 
    if (imgNum == 0){
        img.src = imgs[imgs.length-1].src
        imgNum = imgs.length-1
        santa.classList.toggle("animate")
    } else {
        img.src = imgs[imgNum-1].src
        imgNum--
        santa.classList.toggle("animate")
    }
})

next.addEventListener("click", function(){ 
    if (imgNum == imgs.length-1){
        img.src = imgs[0].src
        imgNum = 0
        santa.classList.toggle("animate")
    } else {
        img.src = imgs[imgNum+1].src
        imgNum++
        santa.classList.toggle("animate")
    }
})

zoomin.addEventListener("click", function(){
    img.classList.remove("zoomminus")
    img.classList.add("zoomplus")
})
zoomout.addEventListener("click", function(){
    img.classList.remove("zoomplus")
    img.classList.add("zoomminus")
})


// Task:
// - Wire up the buttons to switch through the images in the imgs array. 
// - Make sure that the gallery works no matter how many images are added.
// - Decide/implement what to do when you reach either end of the array - do nothing and disable buttons, loop back round to the other end, or something else?
// - Remember to also update the alt tags.

// Stretch goals:
// - Add transitions for a smooth effect.
// - Allow the user to zoom in and out of the images.