let bg = image.create(screen.width, screen.height)
scene.setBackgroundImage(bg)
// Any manipulations now done to bg will be shown on
// the screen
bg.printCenter('Hi, there!', 0, 5, image.font8)
for(let x = 0;x<40;x+=10){
bg.drawLine(x, 0, 100, 100, 1)
}
bg.drawCircle(50,50,50,1)
