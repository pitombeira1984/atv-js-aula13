function validateForm(event) {
    event.preventDefault(); // Impede o envio do formulário

    try {
        // Obtenha os valores dos campos do formulário
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let age = document.getElementById('age').value;

        // Validação básica dos campos
        if (!name) {
            throw new Error('O campo nome é obrigatório.');
        }
        if (!email.includes('@')) {
            throw new Error('Por favor, insira um endereço de email válido.');
        }
        if (isNaN(age) || age <= 0) {
            throw new Error('Por favor, insira uma idade válida.');
        }

        // Se todas as validações passarem
        alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar o código para enviar o formulário ou processar os dados

    } catch (error) {
        // Exibe uma mensagem de erro amigável
        alert(`Erro: ${error.message}`);
    }
}