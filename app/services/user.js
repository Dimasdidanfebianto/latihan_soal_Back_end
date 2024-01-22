const { User } = require('../../database/models');


async function createUser({username, email, password }) {
    if (!username || !email || !password ) {
        return {
            status: 'failed',
            message: 'username, email, and password are required'
        };
    }

    if (
        password.length < 6 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/\d/.test(password) 

    ) {
        return {
            status : 'failed',
            message: 'password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
        };
    }

    try {
        const user = await User.create({ username, email, password });

        return {
            status: 'success',
            data: user
        };
    } catch (err){
        return {
            status: 'failed',
            message: err
        }
    }
}


module.exports = {
    createUser,
}