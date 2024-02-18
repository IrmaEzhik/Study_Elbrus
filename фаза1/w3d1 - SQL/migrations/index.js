const db = require('../db');

const migrate = async () => {
  try {
    await db.query(`
    DROP TABLE IF EXISTS phones;
    DROP TABLE IF EXISTS contacts;
    DROP TABLE IF EXISTS groups;

    CREATE TABLE groups (
        id SERIAL PRIMARY KEY,
        name VARCHAR
    );

    CREATE TABLE contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR,
        group_id INT,
    CONSTRAINT fk_group
      FOREIGN KEY(group_id) 
      REFERENCES groups(id)
      ON DELETE CASCADE
    );

    CREATE TABLE phones (
        id SERIAL PRIMARY KEY,
        phone VARCHAR,
        cont_id INT,
     CONSTRAINT fk_cont
      FOREIGN KEY(cont_id) 
      REFERENCES contacts(id)
      ON DELETE CASCADE
    );

    `);
  } catch (error) {
    console.log(error);
  }
};

migrate();