setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    ms = d.getMilliseconds();
    hr = 30 * h + m / 2;
    mr = 6 * m + s / 10;
    sr = 6 * s + (6 * ms) /1000;

    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${mr}deg)`;
    second.style.transform = `rotate(${sr}deg)`;

}, 10);