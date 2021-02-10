document.querySelector('#calc').onclick = function() {
    let flat = document.querySelector('#flat').value;

    flat = parseInt(flat);

    if( flat >= 1 && flat <= 20 ) {
        alert('Первый подъезд');
    } else if( flat >= 21 && flat <= 48 ) {
        alert('Второй подъезд');
    } else if( flat >= 49 && flat <= 90 ) {
        alert('Третий подъезд');
    } else {
        alert('ОШИБКА, повторите ввод!');
    }
}
