document.querySelectorAll('form').forEach(f => {
    f.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Pedido enviado (demo). Integre com backend para reservas reais.');
    })
});
