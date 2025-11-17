function playVrai(soundEnabled = true) {
    // Vérifier si le son est activé (variable importée depuis game.js)
    if (soundEnabled !== false) {
        let vrai = new Audio('./Sound/BIRDTrop_Piauhau hurleur (ID 1762)_LS.mp3');
        vrai.play();
    }
}

function playFaux(soundEnabled = true) {
    // Vérifier si le son est activé (variable importée depuis game.js)
    if (soundEnabled !== false) {
        let faux = new Audio('./Sound/BIRDSong_Geai des chenes 1 (ID 3453)_LS.mp3');
        faux.play();
    }
}

export { playVrai, playFaux };