const express = require ('express');
const catchAsync = require('../util/cathAsync');
const { createUser } = require('../services/user');
const { User } = require('../../database/models');



exports.addUser = catchAsync(async (req, res) => {
    const { username, email, password } = req.body;

    const result = await createUser({ username, email, password });

    if (result.success) {
        res.status(200).json({
            success: true,
            data: result.data
        });
    } else {
        res.status(400).json({
            success: false,
            error: result.error
        });
    }

})


exports.modifyUser = catchAsync(async(req, res) =>{
    const { username, email, password } = req.body;

    const user = await User.findOne({
        where: {
            id: req.params.id,
        }
    });
    
    if (username) {
        user.username = username;
    }

    if (email) {
        user.email = email;
    }

    if (password) {
        user.password = password;
    }

    await user.save();

    res.status(200).json({
        status: true,
        user: user,
        message : 'User has been updated',
    })
})

exports.getAllUsers = catchAsync(async(req, res) => {
    const { page = 1 , limit  = 10, username = ''} = req.query;
    const offset = (page -1 ) * limit;


    const whereCondition = {};
    if (username) {
        whereCondition['$username$'] = {[Op.iLike]: `%${username}%`}   
        
    const users = await User.findAndCountAll({
        where: whereCondition,
        limit: Number(limit),
        offset: Number(offset)
    });
    
    if (users) {
        res.status(200).json({
            status: true,
            message: 'Succes Get all users',
            users: users
        })
    }

}})
const router = express.Router();


