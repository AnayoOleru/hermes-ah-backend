module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Users', [
      {
        id: '6517a6ea-662b-4eef-ab9f-20f89bd7099c',
        first_name: 'Anayo',
        last_name: 'Oleru',
        title: 'Prof',
        phone_number: '(539) 301-8799',
        email: 'vic3coorp@gmail.com',
        bio: 'Worked as a lecturer...',
        password:
          '$2a$08$FaLCM57LR8X4apZYpKeVb.1XC082FTmkhWp3//j3TVr2XHYg.fuDK',
        is_activated: true,
        image_url: 'https://picsum.photos/200/300',
        is_admin: true,
        is_reviewer: false,
        is_reported: false,
        is_notified: true,
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
        password:
          '$2a$08$FaLCM57LR8X4apZYpKeVb.1XC082FTmkhWp3//j3TVr2XHYg.fuDK',
        is_activated: true,
        image_url: 'https://picsum.photos/200/300/?random',
        is_admin: true,
        is_reviewer: false,
        is_reported: false,
        is_notified: false,
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
        password:
          '$2a$08$FaLCM57LR8X4apZYpKeVb.1XC082FTmkhWp3//j3TVr2XHYg.fuDK',
        is_activated: true,
        image_url: 'https://picsum.photos/g/200/300',
        is_admin: false,
        is_reviewer: false,
        is_reported: false,
        is_notified: false,
        research_field: 'Physics',
      },
      {
        id: '0042e4ff-366d-46cc-9384-40eadb3b2699',
        first_name: 'Bright',
        last_name: 'Daniel',
        title: 'Dr',
        phone_number: '(934) 975-1647',
        email: 'bright@gmail.com',
        bio: 'Worked as a lecturer...',
        password:
          '$2a$08$FaLCM57LR8X4apZYpKeVb.1XC082FTmkhWp3//j3TVr2XHYg.fuDK',
        is_activated: true,
        image_url: 'https://picsum.photos/g/200/300',
        is_admin: false,
        is_reviewer: false,
        is_reported: false,
        is_notified: true,
        research_field: 'Physics',
      },
      {
        id: '9942e4ff-366d-46cc-9384-40eadb3b2622',
        first_name: 'Peter',
        last_name: 'Daniel',
        title: 'Dr',
        phone_number: '(934) 975-1648',
        email: 'adesojitest22@gmail.com',
        bio: 'Worked as a lecturer...',
        password:
          '$2a$08$FaLCM57LR8X4apZYpKeVb.1XC082FTmkhWp3//j3TVr2XHYg.fuDK',
        is_activated: true,
        image_url: 'https://picsum.photos/g/200/300',
        is_admin: false,
        is_reviewer: false,
        is_reported: false,
        is_notified: true,
        research_field: 'Physics',
      },
      {
        id: '2242e4ff-366d-46cc-9384-40eadb3b2644',
        first_name: 'James',
        last_name: 'Daniel',
        title: 'Dr',
        phone_number: '(934) 975-1649',
        email: 'james@gmail.com',
        bio: 'Worked as a lecturer...',
        password:
          '$2a$08$FaLCM57LR8X4apZYpKeVb.1XC082FTmkhWp3//j3TVr2XHYg.fuDK',
        is_activated: true,
        image_url: 'https://picsum.photos/g/200/300',
        is_admin: false,
        is_reviewer: false,
        is_reported: false,
        is_notified: false,
        research_field: 'Physics',
      },
    ]),
};
