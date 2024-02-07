const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const {
    users,
    reservations
} = require('./fakeData');

async function seedUsers(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        const createTable = await client.sql`
                CREATE TABLE IF NOT EXISTS users (
                    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                    name TEXT NOT NULL,
                    email TEXT NOT NULL,
                    password TEXT NOT NULL
                )
            `;
        console.log('Table Users created successfully');
        
        const insertUsers = await Promise.all(users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return client.sql`
                INSERT INTO users (id, name, email, password)
                VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
                ON CONFLICT (id) DO NOTHING;
            `
        }));

        console.log(`Added ${users.length} users to Users table`);
        return {
            createTable,
            users: insertUsers,
          };

    } catch (error) {
        console.error(error);
    }

}

// async function seedReservation(){
//     try {

//     } catch (error) {
//         console.error(error);
//     }
// }   

async function main() {
    const client = await db.connect();
  
    await seedUsers(client);
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });