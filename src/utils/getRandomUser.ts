const users:number[]=[]

export const getRandomUser = async () => {
  const randomUser = users[Math.floor(Math.random() * users.length)];
  document.cookie = `auth_user=${JSON.stringify(randomUser)}; path=/;`;
};
