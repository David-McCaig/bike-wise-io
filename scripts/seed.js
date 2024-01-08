const { db } = require("@vercel/postgres");
const { users, conversationsTable, conversationMessages } = require("../app/lib/placeholder-data");

async function seedUsers(client) {
  try {
    // Create the "uuid-ossp" extension if not exists
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "users" table
    const createUsersTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        image VARCHAR(255) NOT NULL
      );
    `;
    console.log(`Created "users" table`);

    // Seed the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        return client.sql`
          INSERT INTO users (id, name, email, image)
          VALUES (${user.id}, ${user.name}, ${user.email}, ${user.image})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );
    console.log(`Seeded ${insertedUsers.length} users`);

    // Return information about the created table and seeded users
    return {
      createUsersTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedConversations(client) {
  try {
    // Create the "conversations" table
    const createConversationsTable = await client.sql`
      CREATE TABLE IF NOT EXISTS conversations (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID REFERENCES users(id),
        conversation_example VARCHAR(255) NOT NULL
      );
    `;
    console.log(`Created "conversations" table`);

    // Seed the "conversations" table
    const insertedConversations = await Promise.all(
      conversationsTable.map(async (conversation) => {
        return client.sql`
          INSERT INTO conversations (id, user_id, conversation_example)
          VALUES (${conversation.id}, ${conversation.user_id}, ${conversation.conversation_example})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );
    console.log(`Seeded ${insertedConversations.length} conversations`);

    // Return information about the created table and seeded conversations
    return {
      createConversationsTable,
      conversations: insertedConversations,
    };
  } catch (error) {
    console.error("Error seeding conversations:", error);
    throw error;
  }
}

async function seedConversationMessages(client) {
  try {
    // Create the "conversation_messages" table
    const createConversationMessagesTable = await client.sql`
      CREATE TABLE IF NOT EXISTS conversation_messages (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        conversation_id UUID REFERENCES conversations(id),
        content TEXT NOT NULL,
        role VARCHAR(255) NOT NULL
      );
    `;
    console.log(`Created "conversation_messages" table`);

    // Seed the "conversation_messages" table
    const insertedConversationMessages = await Promise.all(
      conversationMessages.map(async (message) => {
        return client.sql`
          INSERT INTO conversation_messages (id, conversation_id, content, role)
          VALUES (${message.id}, ${message.conversation_id}, ${message.content}, ${message.role})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );
    console.log(`Seeded ${insertedConversationMessages.length} conversation messages`);

    // Return information about the created table and seeded conversation messages
    return {
      createConversationMessagesTable,
      conversationMessages: insertedConversationMessages,
    };
  } catch (error) {
    console.error("Error seeding conversation messages:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // Seed users, conversations, and conversation messages
  await seedUsers(client);
  await seedConversations(client);
  await seedConversationMessages(client);

  // Close the database connection
  await client.end();
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err);
});

