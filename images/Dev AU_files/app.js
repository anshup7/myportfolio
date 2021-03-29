gsap.from("header",{duration: 1  , y: -100, ease: "bounce.out"});
gsap.to("head", {duration: 1, rotate: 30, ease: "uniform"});
let obj = gsap.timeline({repeat: -1}).play().to(".desanimate",
{duration: 3, text: "Full Stack Developer", ease: "uniform"})

let welcome = document.getElementById("text-welcome");
let string = welcome.innerHTML;
let newString = '';
for (let i=0; i < string.length; i++) {
    if (string[i] !== " ") {
        newString = newString + `<span onmouseover="bounce('_${i}')" id="_${i}">${string[i]}</span>`;
    } else {
        newString = newString + " ";    
    }
}
console.log(newString);
welcome.innerHTML = newString;

// will be called when any character is mouseovered
function bounce(id) {
    console.log(id);
    gsap.to(`#${id}`,{duration: 1, rotateZ:40, ease: "bounce.out"});

}

let skill = document.querySelector(".skills");
// animate in
// skill.addEventListener("mousemove", (e) => {
//    let xAxis = ((window.innerWidth / 2) - e.pageX) / 25;
//    let yAxis = ((window.innerHeight / 2) - e.pageY) / 25;
//    skill.style.transform = `rotateY(${xAxis}deg)`;
// })
// each image
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");

// animate in 
skill.addEventListener("mouseenter", (e) => {
   img1.style.transition = `all 0.5s ease`;
   img2.style.transition = `all 0.5s ease`;
   img3.style.transition = `all 0.5s ease`;
   img4.style.transition = `all 0.5s ease`;
   img5.style.transition = `all 0.5s ease`;
//    skill.style.transform = "translateZ(150px)";
   img1.style.transform = "translateZ(100px)";
   img2.style.transform = "translateZ(100px)";
   img3.style.transform = "translateZ(100px)";
   img4.style.transform = "translateZ(100px)";
   img5.style.transform = "translateZ(100px)";
})
// animate out
skill.addEventListener("mouseleave", (e) => {
   img1.style.transition = `all 0.5s ease`;
   img2.style.transition = `all 0.5s ease`;
   img3.style.transition = `all 0.5s ease`;
   img4.style.transition = `all 0.5s ease`;
   img5.style.transition = `all 0.5s ease`;
    img1.style.transform = "translateZ(0)";
   img2.style.transform = "translateZ(0)";
   img3.style.transform = "translateZ(0)";
   img4.style.transform = "translateZ(0)";
   img5.style.transform = "translateZ(0)";
})