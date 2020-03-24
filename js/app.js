// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.max = 100
    this.speed = (Math.random()* this.max)+50
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x+=this.speed*dt
    if(this.x > 520) {
        this.x = -160;
        this.update(dt)
    } 
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y,);
};
Enemy.prototype.reset = function(y) {
    this.x = (-Math.random()*100)+200;
    this.y = y;
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 200;
    this.y = 370;
    this.speed = 5;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};
Player.prototype.handleInput = function(e) {
    if (e == 'left' && this.x >= 0) {
        this.x -= 20
    } else if (e == 'down' && this.y < 390) {
        this.y += 20
    } else if (e == 'right' && this.x <= 410) {
        this.x += 20
    } else if (e == 'up' && this.y >= -40) {
        this.y -= 20
    }
    if(this.y == -50) {
        this.reset()
    }
}
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 370;
}
// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
var Enemy1 = new Enemy(-30, 60)
var Enemy2 = new Enemy(30, 140)
var Enemy3 = new Enemy(-220, 225)
var Enemy4 = new Enemy(-100, 305)
var player = new Player()
var allEnemies = [Enemy1, Enemy2, Enemy3, Enemy4]  
 setInterval(function() {
    if(player.y > 270 && player.y < 330) {
        if(player.x < Enemy4.x+100 && player.x > Enemy4.x-100){
            player.reset()
            Enemy4.reset(305)
        }
    } else if (player.y > 190 && player.y < 230) {
        if(player.x < Enemy3.x+100 && player.x > Enemy3.x-100){
            player.reset()
        }
    } else if (player.y > 90 && player.y < 150) {
        if(player.x < Enemy2.x+100 && player.x > Enemy2.x-100){
            player.reset()
        }
    } else if (player.y > 10 && player.y < 70) {
        if(player.x < Enemy1.x+100 && player.x > Enemy1.x-100){
            player.reset()
        }
    }
 },250)