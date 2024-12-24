body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-image: url('4783701.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}

.container {
    text-align: center;
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 600px;
    padding: 20px;
    box-sizing: border-box; /* Para garantir que o padding não afete a largura total */
}

h1 {
    color: #f2ff00;
    font-size: 2em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
    top: 0;
    z-index: 2;
}

#confettiButton {
    font-size: 1em;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #FFD700;
    color: #c8102e;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    animation: shine 2s infinite;
    transition: transform 0.3s;
    position: relative;
    top: 0;
    z-index: 1;
}

#confettiButton:hover {
    transform: scale(1.1);
}

.festive-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.3);
    font-size: 5em;
    font-family: 'Brush Script MT', cursive;
    z-index: 1;
    pointer-events: none;
}

/* Media Query para dispositivos móveis */
@media only screen and (max-width: 600px) {
    body {
        background-size: contain;
    }
    
    .container {
        padding: 10px;
    }
    
    h1 {
        font-size: 1.5em;
    }
    
    #confettiButton {
        font-size: 0.9em;
        padding: 5px 10px;
    }
    
    .festive-text {
        font-size: 3em;
    }
    
    /* Ajustar a imagem de fundo para dispositivos móveis */
    body {
        background-position: center;
    }
}

/* Ajuste adicional para evitar sobreposição e melhorar o layout */
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

/* Para garantir que o botão não sobreponha o texto */
#confettiButton {
    margin-top: 20px; /* Adicionando espaço entre o h1 e o botão */
}

.festive-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.3);
    font-size: 5em; /* Reduzindo o tamanho da fonte para dispositivos móveis */
    font-family: 'Brush Script MT', cursive;
    z-index: 1;
    pointer-events: none;
}

/* Media Query para dispositivos móveis */
@media only screen and (max-width: 600px) {
    body {
        background-size: contain; /* Ajustando o tamanho da imagem de fundo */
    }
    
    .container {
        padding: 10px; /* Reduzindo o padding para telas menores */
    }
    
    h1 {
        font-size: 1.5em; /* Ajustando o tamanho da fonte para telas menores */
    }
    
    #confettiButton {
        font-size: 0.9em; /* Ajustando o tamanho da fonte para telas menores */
        padding: 5px 10px; /* Ajustando o padding para telas menores */
    }
    
    .festive-text {
        font-size: 3em; /* Ajustando o tamanho da fonte para telas menores */
    }
}
#photoContainer {
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 10px;
    border: 2x solid #FFD700;
    position: relative;
    z-index: 2;
    text-align: center;
}

#photoContainer img {
    max-width: 300px;
    max-height: 300px;
    width: auto;
    height: auto;
    border: 3px solid #FFD700;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

#photoContainer p {
    color: #c8102e;
    font-family: 'Brush Script MT', cursive;
    font-size: 1.2em;
}

.festive-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.3);
    font-size: 10em;
    font-family: 'Brush Script MT', cursive;
    z-index: 1;
    pointer-events: none;
}

@keyframes shine {
    0% { box-shadow: 0 0 10px #FFD700; }
    50% { box-shadow: 0 0 20px #FFD700, 0 0 30px #FFD700; }
    100% { box-shadow: 0 0 10px #FFD700; }
}
