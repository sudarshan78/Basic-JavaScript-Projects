

window.addEventListener('keyup', (e)=>{
    const pressedKey = document.querySelector("#pressedKey");
    pressedKey.innerHTML = `${e.key === ' ' ? 'Space' : e.key}`
    console.log(e)
})

window.addEventListener('keyup', (e)=>{
    const keyCode = document.querySelector("#keyCode");
    keyCode.innerHTML = `${e.keyCode}` 
})

window.addEventListener('keyup', (e)=>{
    const code = document.querySelector("#code");
        code.innerHTML = `${e.code}`
})