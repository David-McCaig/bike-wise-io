// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "David McCaig",
    email: "davidmccaig1@gmail.com",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocLWbdD4w7sQ07UtLj3IE4akKJck0hLsQ_AcFX0fjqPu=s96-c",
  },
];

const conversationsTable = [
  {
    id: "510544b2-4001-4271-9855-fec4b6a6442a",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    conversation_example: "Family Chat",
  },
  {
    id: "610544b2-4001-4271-9855-fec4b6a6442a",
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    conversation_example: "Work Discussion",
  },
];

const conversationMessages = [
  {
    conversation_id: "510544b2-4001-4271-9855-fec4b6a6442a",
    content: "Hi there!",
    id: "710544b2-4001-4271-9855-fec4b6a6442a",
    role: "user",
  },
  {
    conversation_id: "610544b2-4001-4271-9855-fec4b6a6442a",
    content: "Hello world!",
    id: "810544b2-4001-4271-9855-fec4b6a6442a",
    role: "assistant",
  },
  {
    conversation_id: "610544b2-4001-4271-9855-fec4b6a6442a",
    content: "How are you?",
    id: "910544b2-4001-4271-9855-fec4b6a6442a",
    role: "user",
  },
];

module.exports = {
  users,
  conversationsTable,
  conversationMessages,
};
