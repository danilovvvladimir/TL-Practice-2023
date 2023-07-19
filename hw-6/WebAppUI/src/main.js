import "./style.css";

// ===== Constants =====

const API_URL = "https://localhost:7263";

// ===== Fetch Data Functions =====

const getAllUsers = async () => {
  const response = await fetch(`${API_URL}/users`);

  return response.json();
};

const getUserById = async id => {
  const response = await fetch(`${API_URL}/users/${id}`);

  return response.json();
};

const createUser = async user => {
  const options = {
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  };

  const response = await fetch(`${API_URL}/users`, options);

  return response.json();
};

const updateUser = async updatedUser => {
  const options = {
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
  };

  const response = await fetch(`${API_URL}/users`, options);

  return response.json();
};

const deleteUser = async id => {
  const options = {
    method: "DELETE",
  };

  const response = await fetch(`${API_URL}/users/${id}`);

  return response.json();
};

// ===== Click Handlers Functions =====

const handleGetAllUsers = async event => {
  console.log(await getAllUsers());
};

const handleGetUser = event => {
  console.log(event);
};

const handleCreateUser = event => {
  console.log(event);
};

const handleDeleteUser = event => {
  console.log(event);
};

const handleUpdateUser = event => {
  console.log(event);
};

// ===== Get Elements =====

const getAllUsersBtn = document.querySelector("#get-all");
const getUserBtn = document.querySelector("#get");
const createUserBtn = document.querySelector("#create");
const deleteUserBtn = document.querySelector("#delete");
const updateUserBtn = document.querySelector("#update");

//

// ===== Add Events =====

getAllUsersBtn.addEventListener("click", handleGetAllUsers);
getUserBtn.addEventListener("click", handleGetUser);
createUserBtn.addEventListener("click", handleCreateUser);
deleteUserBtn.addEventListener("click", handleDeleteUser);
updateUserBtn.addEventListener("click", handleUpdateUser);

//

