const express = require ('express');
const catchAsync = require('../util/cathAsync');
const { createUser } = require('../services/user');



exports.addUser = catchAsync(async (req, res) => {
    const { username, email, password } = req.body;

    const result = await createUser({ username, email, password });

    if (result.success) {
        res.status(201).json({
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


const router = express.Router();


