document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = [];

    // Verifica o campo de usuário
    let username = document.getElementById('username').value;
    if (username.trim() === '') {
        errors.push('O campo de usuário é obrigatório.');
    }

    // Verifica o campo de email
    let email = document.getElementById('email').value;
    if (email.trim() === '') {
        errors.push('O campo de email é obrigatório.');
    } else {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push('O email fornecido não é válido.');
        }
    }

    let errorMessagesDiv = document.getElementById('errorMessages');
    let reloadButton = document.getElementById('reloadButton');

    if (errors.length > 0) {
        errorMessagesDiv.innerHTML = errors.join('<br>');
        errorMessagesDiv.classList.remove('hidden');
        reloadButton.classList.remove('hidden');
    } else {
        errorMessagesDiv.innerHTML = '';
        errorMessagesDiv.classList.add('hidden');
        reloadButton.classList.add('hidden');
        alert('Formulário enviado com sucesso!');
        // Aqui você pode enviar o formulário usando AJAX ou outras técnicas
    }
});
