'use strict';

for (let i = 0; i < 3; i++) {
    let pElement = document.getElementsByTagName('P').item(`${i}`);
    let pHtml = pElement.innerHTML;
    let pArray = pHtml.split(/[\s,\.,\"]+/);

    pArray.forEach((word) => {
        if (word.length > 5) {
            pHtml = pHtml.split(word).join(`<u>${word}</u>`);
        }
    });

    pElement.innerHTML = pHtml;
}
