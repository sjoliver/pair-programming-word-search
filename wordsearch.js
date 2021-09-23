//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

//search for first letter of the word
//if it finds that letter, check the different places where the word could be

//SEINFELDS



const wordSearch = (letters, word) => {

    const horizontalJoin = letters.map(ls => ls.join(''))
    let verticalJoin = []
    for (l in horizontalJoin) {
        // console.log(horizontalJoin[l].search(word))
        if (horizontalJoin[l].search(word) >= 0) {
            return true
        }
    }

    for (let i = 0; i < letters[0].length; i++) {
        verticalJoin.push([])
        for (let j = 0; j < letters[i].length; j++) {
            verticalJoin[i].push(letters[j][i])
        }
    }

    verticalJoin = verticalJoin.map(ls => ls.join(''))

    for (l in verticalJoin) {
        // console.log(verticalJoin[l].search(word))
        if (verticalJoin[l].search(word) >= 0) {
            return true
        }
    }
    console.log(verticalJoin)
    console.log(horizontalJoin)
    return false
}

module.exports = wordSearch