var acc = document.getElementsByClassName('acordeon');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let button = this.firstElementChild;
        let toggleSpan = button.lastElementChild;
        let toggle = toggleSpan.firstElementChild;
        toggle.classList.toggle('rotation');
        var panel = this.lastElementChild;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}
