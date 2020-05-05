let x = 5
let speed = 1
let xpos;
screen.width(80)
let bg = image.create(screen.width, screen.height)
scene.setBackgroundImage(bg)
// Any manipulations now done to bg will be shown on
// the screen
bg.printCenter('Hi, there!', 0, 5, image.font8)
for(let y = 0;y<40;y+=10){
bg.drawLine(y, 0, 100, 100, 1)
}
bg.drawCircle(50,50,50,1)
game.onUpdate(function () {
    x += 1
    xpos = x + speed
    bg.drawCircle(x,60,4,1)
})
