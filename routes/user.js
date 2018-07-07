const express = require('express');
const router = express.Router();

const userService = require('../services/user-service');

router.post('/add-user', async (req, res, next) => {
    const user = await userService.add(req.body);
    res.send(user);
});

module.exports = router;