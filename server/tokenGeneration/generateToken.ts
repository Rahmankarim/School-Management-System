require("dotenv").config();
const jwt = require("jsonwebtoken");

let createScretToken = (id:any) =>
{
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn : 5,
    });
}

export {createScretToken};