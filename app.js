
let m = document.getElementById("m")
let u = document.getElementById("u")
let s = document.getElementById("s")
let i = document.getElementById("i")
let c = document.getElementById("c")

let audio1 = document.getElementById("audio1")
let audio2 = document.getElementById("audio2")
let audio3 = document.getElementById("audio3")
let audio4 = document.getElementById("audio4")
let audio5 = document.getElementById("audio5")

audio1.setAttribute("src", "./assets/audio1.mp3")
audio2.setAttribute("src", "./assets/audio2.mp3")
audio3.setAttribute("src", "./assets/audio3.mp3")
audio4.setAttribute("src", "./assets/audio4.mp3")
audio5.setAttribute("src","./assets/audio5.mp3")

// Click events

m.addEventListener("click", () => {
  audio1.play();
});

u.addEventListener("click", () => {
  audio2.play();
});

s.addEventListener("click", () => {
  audio3.play();
});

i.addEventListener("click", () => {
  audio4.play();
});

c.addEventListener("click", () => {
  audio5.play();
});

//mouse out events
m.addEventListener("mouseout",() => {
  audio1.pause()
})
u.addEventListener("mouseout",() => {
  audio2.pause()
})
s.addEventListener("mouseout",() => {
  audio3.pause()
})
i.addEventListener("mouseout",() => {
  audio4.pause()
})

c.addEventListener("mouseout",() => {
  audio5.pause()
})
// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();


