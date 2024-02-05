const { v4: uuidv4 } = require('uuid');
const { User } = require('../../database/models');

async function createUser({ username, email, password }) {
  try {
    if (!username || !email || !password) {
      throw new Error('Username, email, and password are required.');
    }

    const newUser = await User.create({
      id: uuidv4(),
      username,
      email,
      password,
    });

    return {
      success: true,
      data: newUser,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

module.exports = {
  createUser,
};
