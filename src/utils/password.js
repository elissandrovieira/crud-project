const bcrypt = require('bcrypt')

async function crypto(e) {
    const salt = await bcrypt.genSalt()
    const password = await bcrypt.hash(e, salt)

    return password
}

module.exports = {
    crypto,
}