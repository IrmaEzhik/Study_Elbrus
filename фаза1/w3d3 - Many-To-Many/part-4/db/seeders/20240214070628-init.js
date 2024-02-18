/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Users', [
      { name: 'Alex', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Adam', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    await queryInterface.bulkInsert('Posts', [
      {
        body: `Я в своем познании настолько преисполнился, что я как будто бы уже

      сто триллионов миллиардов лет проживаю на триллионах и
      
      триллионах таких же планет, как эта Земля`,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: 'Ну, погуглите',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('Tags', [
      { tag: 'wow', createdAt: new Date(), updatedAt: new Date() },
      { tag: 'cool', createdAt: new Date(), updatedAt: new Date() },
      { tag: 'olololo', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    await queryInterface.bulkInsert('PostTags', [
      {
        tag_id: 1, post_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        tag_id: 2, post_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        tag_id: 2, post_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        tag_id: 3, post_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
