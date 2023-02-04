let counter_sec = 0, counter_min = 0, counter_hour = 0;
const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');

document.querySelector('.start').addEventListener('click', function() {
    document.querySelector('.start').setAttribute('disabled', true);
    document.querySelector('.start').value = 'START';
    const timer = setInterval(() => {
        counter_sec++;
        counter_sec <= 9 ? sec.textContent = `0${counter_sec}` : sec.textContent = counter_sec;
        if (counter_sec >= 60) {
            counter_sec = 0;
            counter_min++;
            min.textContent = counter_min;
            counter_min <= 9 ? min.textContent = `0${counter_min}` : min.textContent = counter_min;

            if (counter_min >= 60) {
                counter_min = 0;
                counter_hour++;
                hour.textContent = counter_hour;
                counter_hour <= 9 ? hour.textContent = `0${counter_hour}` : hour.textContent = counter_hour;
            }
        }
        document.querySelector('.pause').addEventListener('click', function() {
            clearInterval(timer);
            document.querySelector('.start').value = 'CONTINUE';
            document.querySelector('.start').removeAttribute('disabled');
        });
        document.querySelector('.reset').addEventListener('click', function() {
            clearInterval(timer);
            document.querySelector('.start').removeAttribute('disabled');
            counter_sec = 0; sec.textContent = `0${0}`;
            counter_min = 0;  min.textContent = `0${0}`;
            counter_hour = 0; hour.textContent = `0${0}`;
        });
    }, 1000); 
});