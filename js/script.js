const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    console.log(counter);
    counter.innerText = '0';
    increase();
    function increase() {
        let num = +counter.innerText;
        const dataCeil = counter.getAttribute('data-ceil');
        console.log(dataCeil);
        const increment = dataCeil / 10;
        num = Math.ceil(num + increment);
        

        if (num < dataCeil) {
            counter.innerText = num;
            setTimeout(increase, 50)
        } else {
            counter.innerText = dataCeil;
        }
    }
});




