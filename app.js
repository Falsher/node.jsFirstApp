const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contactsOpertions = require("./db");
const arr = hideBin(process.argv);
const { argv } = yargs(arr);

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = contactsOpertions.listContacts();
      console.log(contacts);
      break;

    case "get":
      contactsOpertions
        .getContactById(id)
        .then((oneContact) => console.log(oneContact))
        .catch((err) => console.log(`контакт с ${id} не найден`));
      break;

    case "add":
      const newContact = contactsOpertions.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = contactsOpertions.removeContact(id);
      if (!deleteContact) {
        throw new Error(`контакт с ${id} не найден`);
      }
      console.log("удалил");
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
