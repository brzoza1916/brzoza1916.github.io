

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","tło.jpg")
loadSprite("gwiazda","gwiazda.png")
loadSound("muzyka","merry.mp3")

add ([
    sprite("kartka")
]
)
const gwiazda = add ([
    sprite("gwiazda"),
    pos(0,0)
]
)
let wprawo = true

gwiazda.onUpdate(() => {
    if(wprawo && gwiazda.pos.x < 350)
    gwiazda.pos.x += 1

    else if(!wprawo && gwiazda.pos.x > -450)
    gwiazda.pos.x -= 1
    else wprawo ^= true
})

onMouseRelease (()=>play ("muzyka"))
