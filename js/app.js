// Enemies our player must avoid
var Enemy = function(x,y) {
    this.x = x;
    this.y = y;
    this.max = 100
    this.speed = (Math.random()* this.max)+50
    this.sprite = 'images/enemy-bug.png';
};
Enemy.prototype.update = function(dt) {
    this.x+=this.speed*dt 
};
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 60, 100);
};
Enemy.prototype.reset = function(y) {
    this.x = Math.floor(Math.random() * (520 + 160 + 1) - 160);
    this.speed = this.speed = (Math.random()* this.max)+50
    this.y = y;
}
var Player = function(sprite) {
    this.x = 350;
    this.y = 530;
    this.speed = 5;
    this.sprite = sprite || 'boy';
};
Player.prototype.update = function(dt) {
    //IDK what does this do
};
Player.prototype.handleInput = function(e) {
    if (e == 'left' && this.x >= 0) {
        this.x -= 30
    } else if (e == 'down' && this.y < 530) {
        this.y += 30
    } else if (e == 'right' && this.x <= 750) {
        this.x += 30
    } else if (e == 'up' && this.y >= -20) {
        this.y -= 30
    }
    if(this.y === -40) {
        let context = this;
        setTimeout(function(){context.reset()},2000)
    }
}
Player.prototype.reset = function() {
    this.x = 350;
    this.y = 530;
}
// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(document.getElementById(this.sprite), this.x, this.y,80,150);
};
var Game = function() {
    this.score = 0;
    this.lives = 4;    
}
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
$('#chars').show()
$('#chars').animate({opacity:1},2000)

var player = new Player();

var allEnemies = [] 

$('.chars').click(function() {
    id = $(this).find(':nth-child(1)')[0].id;
    player = new Player(id)
    var Enemy1 = new Enemy(-30, 60)
    var Enemy2 = new Enemy(30, 110)
    var Enemy3 = new Enemy(-220, 160)
    var Enemy4 = new Enemy(-100, 210)
    var Enemy5 = new Enemy(-100, 310)
    var Enemy6 = new Enemy(-100, 360)
    var Enemy7 = new Enemy(-100, 410)
    var Enemy8 = new Enemy(-100, 460)
    var Enemy9 = new Enemy(-100, 510)
    allEnemies=[Enemy1, Enemy2, Enemy3, Enemy4, Enemy5, Enemy6, Enemy7, Enemy8, Enemy9]
    $('#chars').hide()
    $('#canvas').show()
    //this is for making the enemeies appear again from the left
    setInterval(function() {
        if(Enemy1.x > 780) {
            Enemy1.x = -160;
        } else if(Enemy2.x > 810) {
            Enemy2.x = -160;
        } else if(Enemy3.x > 810) {
            Enemy3.x = -160;
        } else if(Enemy4.x > 810) {
            Enemy4.x = -160;
        } else if(Enemy5.x > 810) {
            Enemy5.x = -160;
        } else if(Enemy6.x > 810) {
            Enemy6.x = -160;
        } else if(Enemy7.x > 810) {
            Enemy7.x = -160;
        } else if(Enemy8.x > 810) {
            Enemy8.x = -160;
        } else if(Enemy9.x > 810) {
            Enemy9.x = -160;
        }
    },250)
    //this is handling the collision 
    // setInterval(function() {
    //     if(player.y > 270 && player.y < 330) {
    //         if(player.x < Enemy4.x+100 && player.x > Enemy4.x-100){
    //             $('#loss').show()
    //             player.reset()
    //             Enemy4.reset(305)
    //             Enemy3.reset(225)
    //             Enemy2.reset(140)
    //             Enemy1.reset(60)  
    //             setTimeout(function(){$('#loss').hide()},1000)
    //             return;
    //         }
    //     } else if (player.y > 190 && player.y < 230) {
    //         if(player.x < Enemy3.x+100 && player.x > Enemy3.x-100){
    //             $('#loss').show()
    //             player.reset()
    //             Enemy4.reset(305)
    //             Enemy3.reset(225)
    //             Enemy2.reset(140)
    //             Enemy1.reset(60)  
    //             setTimeout(function(){$('#loss').hide()},1000)
    //             return;
    //         }
    //     } else if (player.y > 90 && player.y < 150) {
    //         if(player.x < Enemy2.x+100 && player.x > Enemy2.x-100){
    //             $('#loss').show()
    //             player.reset()
    //             Enemy4.reset(305)
    //             Enemy3.reset(225)
    //             Enemy2.reset(140)
    //             Enemy1.reset(60)    
    //             setTimeout(function(){$('#loss').hide()},1500)
    //             return;
    //         }
    //     } else if (player.y > 10 && player.y < 70) {
    //         if(player.x < Enemy1.x+100 && player.x > Enemy1.x-100){
    //             $('#loss').show()
    //             player.reset()
    //             Enemy4.reset(305)
    //             Enemy3.reset(225)
    //             Enemy2.reset(140)
    //             Enemy1.reset(60)    
    //             setTimeout(function(){$('#loss').hide()},1500)
    //             return;
    //         }
    //     }
    //  },250)
})
$('#reset').click(function() {
    player.reset()
    for(var i = 0; i < allEnemies.length; i++) {
        allEnemies[i].reset(allEnemies[i].y)
    }
})



//this is the solution for collision (loss) for 4 enemies and a 5*6 game now i'll fix it for 12*12

