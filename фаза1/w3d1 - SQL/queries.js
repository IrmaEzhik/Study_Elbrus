const db = require('./db');

const allContacts = async () => {
  try {
    const [contacts] = await db.query(`
    SELECT id, name FROM contacts;
        `);

    console.log('---->', contacts);
  } catch (error) {
    console.log(error);
  }
};

// allContacts();

const allContactsWithGroup = async () => {
  try {
    const [contacts] = await db.query(`
      SELECT contacts.id, contacts.name AS contact,phone, groups.name  FROM contacts
      JOIN  groups ON contacts.group_id = groups.id
      LEFT JOIN phones ON phones.cont_id = contacts.id
      WHERE 
      phone IS NULL;
          `);

    console.log('---->', contacts);
  } catch (error) {
    console.log(error);
  }
};

allContactsWithGroup();