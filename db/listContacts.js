const fs = require("fs").promises;
// const path = require("path");
// const contactsPath = path.join(`${__dirname}/contacts.json`);

// function listContacts() {
//   fs.readFile(contactsPath)
//     .then((data) => console.log(JSON.parse(data)))
//     .catch((err) => console.log(err.message));
// }
const contacts = require("./contacts.json");
const listContacts = async () => contacts;
module.exports = listContacts;
