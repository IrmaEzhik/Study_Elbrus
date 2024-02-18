const { Group, Contact, Phone } = require('./db/models');

const createGroups = async () => {
  await Group.bulkCreate([
    { name: 'work' },
    { name: 'friends' },
    { name: 'family' },
  ]);

  await Contact.bulkCreate([
    { name: 'Alex', group_id: 1 },
    { name: 'Adam', group_id: 1 },
    { name: 'Oleg', group_id: 2 },
  ]);

  await Phone.bulkCreate([
    { phone: '777', contact_id: 1 },
    { phone: '555', contact_id: 2 },
    { phone: '7778', contact_id: 3 },
    { phone: '77789', contact_id: 3 },
  ]);
};
// createGroups();

const findGroup = async () => {
  const res = await Group.findAll({
    where: {
      name: 'ololo',
    },
  });

  console.log(JSON.parse(JSON.stringify(res)));
};

// findGroup();

const joins = async () => {
  const res = await Group.findAll({
    include: {
      model: Contact,
      include: Phone,
    },
  });

  console.log(JSON.stringify(res, null, 2));
};

joins();