document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState)

    if(document.visibilityState === 'visible') {
        console.log('Función para reproducir el video....' )
    } else {
        console.log('Pausando el video...')
    }
})