document.querySelectorAll('.copiar').forEach(item => {
    item.addEventListener('click', function() {
        const textToCopy = this.getAttribute('data-text');
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Exibe a mensagem de copiado
            const msg = document.getElementById('copiado-msg');
            msg.classList.add('visivel');
            
            // Destaca o item copiado
            this.classList.add('copiado');

            // Remove o destaque e a mensagem após 2 segundos
            setTimeout(() => {
                msg.classList.remove('visivel');
                this.classList.remove('copiado');
            }, 2000);
        }).catch(err => {
            console.error('Falha ao copiar: ', err);
        });
    });
});
