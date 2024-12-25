import { users } from "../../db";

export const getRandomUser = async () => {
  const randomUser = users[Math.floor(Math.random() * users.length)];
  document.cookie = `auth_user=${JSON.stringify(randomUser)}; path=/;`;
};
