
const canvas = document.querySelector('canvas');

const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = './img/Pellet Town.png';

const playerImage = new Image ();
playerImage.src = './img/playerDown.png';

class Sprite {
    constructor({
        position, 
        velocity,
        image 
    }) {
        this.position = position
        this.velocity = velocity
        this.image = image
    }
    draw() {
        context.drawImage(this.image,this.position.x, this.position.y)
    }
};

const background = new Sprite({
    position : {
        x : -735,
        y : -600
    },
    image : image
})

const keys = {
    z : {
        pressed: false
    },
    q : {
        pressed: false
    },
    s : {
        pressed: false
    },
    d : {
        pressed: false
    }

}

function animate() {
    window.requestAnimationFrame(animate);
    background.draw();
    
    context.drawImage(playerImage, 
        0,
        0,
        playerImage.width /4,
        playerImage.height,
        canvas.width / 2 - playerImage.width / 4 / 2 , 
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height
    )
    if (keys.z.pressed && lastKey === 'z') background.position.y += 3;
    else if (keys.q.pressed && lastKey === 'q' ) background.position.x += 3;
    else if (keys.s.pressed && lastKey === 's') background.position.y -= 3;
    else if (keys.d.pressed && lastKey === 'd') background.position.x -= 3;
};
animate()


let lastKey = ''
window.addEventListener('keydown', (e) => {
    
    switch (e.key) {
        case 'z' :
            keys.z.pressed = true;
            lastKey = 'z'
            break
    }

    switch (e.key) {
        case 'q' :
            keys.q.pressed = true;
            lastKey = 'q'
            break
    }

    switch (e.key) {
        case 's' :
            keys.s.pressed = true;
            lastKey = 's'
            break
    }

    switch (e.key) {
        case 'd' :
            keys.d.pressed = true;
            lastKey = 'd'
            break
    }
});

window.addEventListener('keyup', (e) => {
    
    switch (e.key) {
        case 'z' :
            keys.z.pressed = false;
            break
    }

    switch (e.key) {
        case 'q' :
            keys.q.pressed = false;
            break
    }

    switch (e.key) {
        case 's' :
            keys.s.pressed = false;
            break
    }

    switch (e.key) {
        case 'd' :
            keys.d.pressed = false;
            break
    }
});



