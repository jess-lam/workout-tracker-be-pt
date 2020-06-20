const bcrypt = require('bcrypt');

function encrypt(string){
  return bcrypt.hashSync(string, 8);
}

exports.seed = function(knex, Promise) {
      return knex('users').insert([
        {username: 'test',
         email: 'test@gmail.com',
         password: encrypt('password'),
         bio: "Full Stack Web Developer",
         zip: 53546,
         affiliate: false,
         verified: false,
         xp: 0,
         height: 65,
         weight: 150,
        },
        {username: 'nate',
         email: 'nate1898@gmail.com',
         password: encrypt('password'),
         bio: "Full Stack Web Developer, Amateur Chef",
         zip: 16424,
         affiliate: false,
         verified: false,
         xp: 0,
         height: 72,
         weight: 240,        
        },
        {username: 'cory',
        email: 'cory@gmail.com',
        password: encrypt('password'),
        bio: "Front End Web Developer",
        zip: 55698,
        affiliate: false,
        verified: false,
        xp: 0,
        height: 75,
        weight: 200
        } 
      ]);
   };


