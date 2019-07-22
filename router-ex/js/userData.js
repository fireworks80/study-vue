const userData = [
  {
    id: 1,
    name: 'Takuya tejima',
    description: '타쿠야 설명'
  },
  {
    id: 2,
    name: 'Yohei Noda',
    description: '노다 설명'
  }
];

const getUsers = callback => {
  setTimeout(() => {
    callback(null, userData);
  }, 1000);
};

const getUser = (userId, callback) => {
  setTimeout(() => {
    const filteredUsers = userData.filter(user => user.id === Number(userId));
    callback(null, filteredUsers && filteredUsers[0]);
  }, 1000);
};

const postUser = (params, callback) => {
  setTimeout(() => {
    params.id = userData.length + 1;
    userData.push(params);
    callback(null, params);
  }, 1000);
};

export default {
  getUsers,
  getUser,
  postUser
};
