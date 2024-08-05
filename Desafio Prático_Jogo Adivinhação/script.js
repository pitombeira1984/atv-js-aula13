document.addEventListener('DOMContentLoaded', () => {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    const guessButton = document.getElementById('guessButton');
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');

    guessButton.addEventListener('click', () => {
        const palpite = parseInt(guessInput.value);

        if (isNaN(palpite)) {
            message.textContent = 'Por favor, insira um número válido.';
            message.style.color = 'red';
        } else if (palpite === numeroSecreto) {
            message.textContent = 'Parabéns! Você adivinhou o número!';
            message.style.color = 'green';
        } else if (palpite < numeroSecreto) {
            message.textContent = 'O número escolhido é maior que seu palpite.';
            message.style.color = 'orange';
        } else {
            message.textContent = 'O número escolhido é menor que seu palpite.';
            message.style.color = 'orange';
        }

        guessInput.value = '';
        guessInput.focus();
    });
});
