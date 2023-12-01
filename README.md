# 18-social-network-api

## Description
This is a social network API that allows users to create profiles, make posts (thoughts), add reactions, and add friends. The API is built with Node.js, Express.js, and MongoDB.

## Table of Contents
Installation
Usage
License
Contributing
Tests
Questions

## demo

https://drive.google.com/file/d/1KWMaufoLxc9w_xyz8NI7tJRbBk9poX6C/view

## Installation
To install this project, follow these steps:

1.
Clone the repository: git clone git@github.com:JKernusz/18-social-network-api.git
2.
Install dependencies: npm install
3.
Start the server: npm start


## Usage
Once the server has started, you can use the API by making HTTP requests to the following endpoints:

/api/users - GET all users, POST a new user
/api/users/:userId - GET a single user, PUT to update a user, DELETE to delete a user
/api/thoughts - GET all thoughts, POST a new thought
/api/thoughts/:thoughtId - GET a single thought, PUT to update a thought, DELETE to delete a thought
/api/reactions - GET all reactions, POST a new reaction
/api/reactions/:reactionId - GET a single reaction, DELETE to delete a reaction
/api/friends - GET all friends, POST a new friend request, DELETE to accept or reject a friend request
/api/friends/:friendId - GET a single friend, DELETE to remove a friend


## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Please open an issue first to discuss what you would like to change.

## Tests
To run tests, run the following command:

npm test

thank you! <3