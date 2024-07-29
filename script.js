const modal = document.querySelector('#modal');
const share = document.querySelector('#share');

share.addEventListener('click', (e) => {
    console.log(modal.style.display);

    if(modal.style.display == '' || modal.style.display == "none") {
        modal.style.display = 'flex';
    } else if(modal.style.display == 'flex') {
        modal.style.display = 'none';
    }
})  