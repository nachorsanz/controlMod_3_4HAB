'use strict';
import { formatHour } from './helpers.js';
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

setInterval(() => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let hour = formatHour(hours, minutes, seconds);
    h1.textContent = hour;
    const date = now.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    h2.textContent = date;
    console.log(hour, date);
}, 5000);

setInterval();
