const calcBtn = document.querySelector('#calc');

calcBtn.addEventListener('click', function() {
    let flat = document.querySelector('#flat');

    flat = parseInt(flat.value);

    if( flat >= 1 && flat <= 20 ) {
        alert('Первый подъезд');
    } else if( flat >= 21 && flat <= 48 ) {
        alert('Второй подъезд');
    } else if( flat >= 49 && flat <= 90 ) {
        alert('Третий подъезд');
    } else {
        alert('ОШИБКА, повторите ввод!');
    }
})
