const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const particlesArray = []

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

})

const mouse = {
  x: undefined,
  y: undefined,
}

canvas.addEventListener('click', function (ev) {
  mouse.x = ev.x
  mouse.y = ev.y

})

canvas.addEventListener('mousemove', function (ev) {
  mouse.x = ev.x
  mouse.y = ev.y

})

// function drawCircle() {
//   ctx.fillStyle = 'white'
//   ctx.beginPath()
//   ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2)
//   ctx.fill()
//   ctx.closePath();
// }

class Particle {
  constructor() {
    // this.x = mouse.x
    // this.y = mouse.y
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 5 + 1
    this.speedX = Math.random() * 5 - 1.5
    this.speedY = Math.random() * 5 - 1.5
  }
  update() {
    this.x += this.speedX
    this.y += this.speedY
  }
  draw() {
    ctx.fillStyle = 'yellow'
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 25
    ctx.shadowColor = 'yellow'
    ctx.beginPath()
    ctx.arc(this.x, this.y, 20, 0, Math.PI * 2)
    ctx.fill()
  }
}

function init() {
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle())
  }
}
init()

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update()
    particlesArray[i].draw()
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // drawCircle()
  handleParticles()
  requestAnimationFrame(animate)
}

animate()

