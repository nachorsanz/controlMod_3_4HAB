async function obtenerPersonales(limit) {
    for (let i = 1; i <= limit; i++) {
        const response = await fetch(
            `https://rickandmortyapi.com/api/episode?page=${i}`
        );
        const { results } = await response.json();
        const dataCharacters = results.filter(({ air_date }) =>
            /January/.test(air_date)
        );
        const characters = dataCharacters.map(
            (character) => character.characters
        );
        console.log(characters);
        const peoples = await characters[0].concat(characters[1]);
        const final = peoples.concat(characters[2]);
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        const uniques = final.filter(onlyUnique);
        for (const unique of uniques) {
            const responses = await fetch(`${unique}`);
            const responseData = await responses.json();
            const dataCharacters = responseData.name;
            console.log(dataCharacters);
        }
    }
}
obtenerPersonales(3);
