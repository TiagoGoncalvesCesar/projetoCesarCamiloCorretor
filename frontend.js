document.querySelector('#botao-enviar').addEventListener('click', async (event) => {
    event.preventDefault();
    
    // Pega os valores dos campos do formulário
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const mensagem = document.querySelector('#mensagem').value;

    try {
        // Envia os dados para o backend
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, mensagem })
        });

        // Resposta do servidor
        if (response.ok) {
            alert('Email enviado com sucesso!');
        } else {
            alert('Erro ao enviar email.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro de conexão.');
    }
});
