const { Post, User, Tag } = require('./db/models');

const check = async () => {
  const data = await Post.findAll({
    include: [User, Tag],
  });

  console.log(JSON.stringify(data, null, 2));
};

const addTag = async () => {
  const [newTag, created] = await Tag.findOrCreate({
    where: { tag: 'trololo' },
  });

  if (!created) {
    await newTag.destroy();
  }
//   console.log(created, newTag);
};

addTag();
// check();