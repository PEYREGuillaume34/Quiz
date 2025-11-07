function playVrai() {
    let vrai = new Audio('./Sound/vrai.mp3')
    vrai.play()
}
function playFaux() {
    let faux = new Audio('./Sound/')
    faux.play()
}
export {playVrai, playFaux};