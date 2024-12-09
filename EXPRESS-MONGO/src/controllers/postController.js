"use strict";
let Models = require("../models"); // matches index.js
const getPost = (res) => {
    // finds all users
    Models.post.find({})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
})
const createPost = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data)
    new Models.User(data).save()
.then(data => res.send({result: 200, data: data}))
.catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message});
});
module.exports = {
   getPost, 
   createPost
}}}