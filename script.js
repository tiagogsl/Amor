const img = document.getElementById('imagen-arrastrable');
const posOriginal = img.getBoundingClientRect();

img.addEventListener('mousedown', function(e) {
    e.preventDefault();
    console.log('clic detectado');

    img.classList.remove('volviendo');

    document.addEventListener('mousemove', mover);
    document.addEventListener('mouseup', soltar);
});
    function mover(e) {
        img.style.position = 'fixed';
        img.style.left = e.clientX - img.width / 2 + 'px';
        img.style.top = e.clientY - img.height / 2 + 'px';
    }

    function soltar() {
        document.removeEventListener('mousemove', mover);
        document.removeEventListener('mouseup', soltar);

        img.classList.add('volviendo');
        img.style.left = posOriginal.left + 'px';
        img.style.top = posOriginal.top + 'px';

        img.addEventListener('transitionend', function() {
            img.classList.remove('volviendo');
            img.style.position = '';
            img.style.left = '';
            img.style.top = '';
        }, { once: true });
    }