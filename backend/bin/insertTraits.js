const pool = require('../databasePool');
const TRAITS = require('../data/traits.json');
//const TRAITS = require('.././data/traits.json');

TRAITS.forEach(TRAITS => {
    const traitType = TRAITS.type;
    const traitValues = TRAITS.values;

    traitValues.forEach(traitValue => {
        pool.query(
            `INSERT INTO trait("traitType", "traitValue")
             VALUES($1, $2)
             RETURNING id`,
            [traitType, traitValue],
            (error, response) => {
                if(error) console.error(error);

                const traitId = response.rows[0].id;

                console.log(`Inserted trait - id: ${traitId}`);
            }
        );
    });
});