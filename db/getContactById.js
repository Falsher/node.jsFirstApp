const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contactIdx = contacts.findIndex((contact) => contact.id === contactId);
  if (contactIdx === -1) {
    return null;
  }
  return contacts[contactIdx];
};

module.exports = getContactById;
