controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 9 9 9 9 . . . 
        . . . . . . . 9 9 9 9 5 9 . . . 
        . . 9 9 9 9 9 9 9 9 5 9 9 . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
let enemy_ship: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 4 4 4 
    . . . . . . . . . . 6 6 6 6 . . 
    . . . . . . . . 6 6 6 6 6 6 . . 
    . . . . . . 6 6 6 6 6 6 6 6 . . 
    . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 a . . 
    6 6 6 6 6 6 6 6 6 6 6 6 a a a . 
    6 6 6 6 6 6 6 6 6 6 6 6 a a a . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 a . . 
    . . . . . 6 6 6 6 6 6 6 6 6 . . 
    . . . . . . . . 6 6 6 6 6 6 . . 
    . . . . . . . . . . 6 6 4 4 4 4 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
game.onUpdateInterval(2000, function () {
    enemy_ship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . . 3 2 2 2 . . . . . . 
        . . . . . . 3 3 3 2 2 4 . . . . 
        . . . . . . 2 3 3 3 2 2 . . . . 
        . . . 2 . . 2 3 3 3 3 2 . . . . 
        . . 2 2 2 2 2 3 3 3 3 3 2 . . . 
        . . . . . . 2 2 2 2 2 2 2 . . . 
        . . . . . . 2 2 2 2 2 3 3 2 . . 
        . . . . . . 2 2 2 3 3 3 3 2 4 . 
        . . . . . . . . 2 3 2 3 3 2 2 . 
        . . . . . . . . . . 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
