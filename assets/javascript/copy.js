document.querySelectorAll('.copiar').forEach(item => {
    item.addEventListener('click', function() {
        const textToCopy = this.getAttribute('data-text');
        navigator.clipboard.writeText(textToCopy).then(() => {
            const msg = document.getElementById('copiado-msg');
            msg.classList.add('visivel');
            
            this.classList.add('copiado');

            setTimeout(() => {
                msg.classList.remove('visivel');
                this.classList.remove('copiado');
            }, 2000);
        }).catch(err => {
            console.error('Falha ao copiar: ', err);
        });
    });
});
