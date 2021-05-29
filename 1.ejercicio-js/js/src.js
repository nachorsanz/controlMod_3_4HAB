'use strict';
const ul = document.querySelector('ul.userlist');
const liLoading = document.querySelector('li.loading');
const frag = document.createDocumentFragment();

const getUsers = async (limit) => {
    try {
        const response = await fetch(
            `https://randomuser.me/api/?results=${limit}`
        );

        const { results } = await response.json();

        for (const user of results) {
            console.log(user);
            const picture = user.picture.large;
            const { first, last } = user.name;
            const { username } = user.login;
            const { city, country } = user.location;
            const email = user.email;
            const gender = user.gender;
            const li = document.createElement('li');
            console.log(
                `${picture}, ${first} ${last}, ${gender}, ${username}, ${email}, ${city} (${country} `
            );
            li.innerHTML = `
                <article>
                    <header>
                    <img src="${picture}" alt="${first} ${last}">
                        
                        <h1>${first} ${last} </h1>
                        <h2>${gender}</h2>
                        <h3>${username}</h3>
                    </header>
                    <p class="mail"> Email : ${email} </p>
                    <p>${city} (${country})</p>
                </article>
            `;

            frag.append(li);
        }

        liLoading.remove();

        ul.append(frag);
    } catch (error) {
        console.log(error);
    }
};

setTimeout(() => {
    const numberOfUser = Number(
        prompt('Inserte un nº de usuarios del 1 al 100:')
    );
    getUsers(numberOfUser);
}, 500);
