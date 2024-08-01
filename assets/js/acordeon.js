var acc = document.getElementsByClassName('acordeon');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let toogle = document.getElementById('toogle');
        let sec = this.parentElement;
        sec.classList.toggle('active');
        toggle.classList.toggle('rotation');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}
