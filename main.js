// ------------ auto type in home -------------
let autoType = new Typed(".auto-type",{
    strings : ["Talal Abdelrahman", "Frontend deveolper"],
    typeSpeed : 75,
    backSpeed : 75,
    loop : true
})

// ------------ light mode function -------------
const icon = document.querySelector(".fa-sun")
icon.onclick = function(){
    document.body.classList.toggle("light-mode")
}