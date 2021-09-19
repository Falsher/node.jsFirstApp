const { v4 } = require("uuid");
const fs = require("fs/promises");
const path = require("path");
const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts");

const contactsPath = path.join(__dirname, "contacts.json");

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { name, email, phone, id: v4() };
  contacts.push(newContact);
  await updateContacts(contacts);

  return newContact;
};
module.exports = addContact;
