document.getElementById('confettiButton').addEventListener('click', function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    const frasesHomenagem = [
        "Você é uma pessoa incrível!",
        "Siga em frente, seu futuro vai ser maravilhoso!",
        "Seu sorriso é o melhor presente de Natal!",
        "Com você, o Natal é sempre especial!",
        "Feliz Natal, Amanda!",
        "Sua presença é o melhor presente que poderia receber.",
        "Que seu Natal seja tão maravilhoso quanto você!",
        "Você faz com que o Natal seja mágico!",
        "Que você e sua família também sejam abençoados neste Natal e sempre. Feliz Natal!",
        "O brilho do Natal não é nada comparado ao brilho dos seus olhos"
    ];

    const fraseAleatoria = frasesHomenagem[Math.floor(Math.random() * frasesHomenagem.length)];

    setTimeout(function() {
        let photoContainer = document.getElementById('photoContainer');
        photoContainer.innerHTML = ''; 

        let img = document.createElement('img');
        img.src = 'Imagem do WhatsApp de 2024-12-24 à(s) 13.30.57_fcd677ea.jpg'; 
        img.alt = 'Sua foto';
        img.style.maxWidth = '300px';
        img.style.maxHeight = '300px';
        photoContainer.appendChild(img);

        let text = document.createElement('p');
        text.textContent = fraseAleatoria;
        text.style.color = '#c8102e';
        photoContainer.appendChild(text);

        let natalMensagem = document.createElement('p');
        natalMensagem.textContent = 'O Natal é mais feliz com você';
        natalMensagem.style.color = '#c8102e';
        photoContainer.appendChild(natalMensagem);
    }, 1000); 
});
