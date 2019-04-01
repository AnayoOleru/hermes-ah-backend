module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Users', [
      {
        id: '6517a6ea-662b-4eef-ab9f-20f89bd7099c',
        first_name: 'Anayo',
        last_name: 'Oleru',
        title: 'Prof',
        phone_number: '(539) 301-8799',
        email: 'anayo@mail.com',
        bio: 'Worked as a lecturer...',
        password: '12345678',
        is_activated: true,
        image_url: 'https://picsum.photos/200/300',
        is_admin: true,
        is_reviewer: false,
        is_reported: false,
        research_field: 'Computer Science',
      },
      {
        id: '57c515a1-890d-412f-8ca1-0a5395123dca',
        first_name: 'Ameachi',
        last_name: 'Chuks',
        title: 'Prof',
        phone_number: '(927) 451-2337',
        email: 'ameachichuks@gmail.com',
        bio: 'Worked as a lecturer...',
        password: '12345678',
        is_activated: true,
        image_url: 'https://picsum.photos/200/300/?random',
        is_admin: false,
        is_reviewer: false,
        is_reported: false,
        research_field: 'Chemistry',
      },
      {
        id: '7142e4ff-366d-46cc-9384-40eadb3b2626',
        first_name: 'Adesoji',
        last_name: 'Daniel',
        title: 'Dr',
        phone_number: '(934) 975-1645',
        email: 'sojida@gmail.com',
        bio: 'Worked as a lecturer...',
        password: '12345678',
        is_activated: true,
        image_url: 'https://picsum.photos/g/200/300',
        is_admin: false,
        is_reviewer: false,
        is_reported: false,
        research_field: 'Physics',
      },
    ]),
};
