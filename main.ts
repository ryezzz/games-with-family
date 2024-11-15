function walk () {
	
}
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . 3 3 3 . . 3 3 . . . . . 
    . . . . 3 . . . . . 3 3 . . . . 
    . . . 3 3 . f . f . . 3 . . . . 
    . . . 3 . . . . . . . 3 . . . . 
    . . . 3 . . f f f . . 3 . . . . 
    . . . 3 3 . . . . . 3 . . . . . 
    . . . . 3 3 3 . 3 3 3 . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
animation.runMovementAnimation(
mySprite,
animation.animationPresets(animation.bounceLeft),
2000,
false
)
tiles.setCurrentTilemap(tilemap`level2`)
for (let index = 0; index < 4; index++) {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
}
