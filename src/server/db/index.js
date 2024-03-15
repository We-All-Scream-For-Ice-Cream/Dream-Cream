
const db = require('./client')

async function getAllIceCream() {
    const { rows } = await db.query(` SELECT * FROM iceCream`)
    return rows
}

async function getSinlgeIceCream() {

}

async function getIceCreamByName(name) {
    const { rows } = await db.query(`
    SELECT * FROM iceCream
    WHERE name = $1
    `, [ name ] )

    return rows[0]
}

module.exports = { getAllIceCream, getIceCreamByName, getSinlgeIceCream }