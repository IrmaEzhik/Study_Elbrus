const db = require('../db');

const seedDb = async () => {
  try {
    await db.query(`
        INSERT INTO groups (name)
        VALUES
        ('work'),
        ('friends');

        INSERT INTO contacts (name, group_id)
        VALUES
        ('Alex', 1),
        ('Julia', 1),
        ('Oleg', 2);

        INSERT INTO phones (phone,cont_id)
        VALUES
        ('123', 1),
        ('321', 3);

    `);
  } catch (error) {
    console.log(err);
  }
};

seedDb();