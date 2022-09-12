export const setUsers = (users) => {
  return { type: "USERS", payload: users };
};

export const deleteUser = (id) => {
  return { type: "DELETE_USER", payload: id };
};

export const editUser = (id, user) => {
  return { type: "EDIT_USER", payload: { id, user } };
};
