const { User } = require('../../database/models');


async function createUser({username, email, password }) {
  try {
    const newUser = await User.create({
        username,
        email,
        password
    });

    return {
        success: true,
        data: newUser
    }
  } catch (error) {
    return {
        success: false,
        error
    }
  }
}





module.exports = {
    createUser,
 
}