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

/*
 * ===== Click Handlers Functions =====
 * вызов соответствующей фетч функции, рендер на основе пришедших данных (создание нод)
 *
 */

// ===== Get Elements =====

//

// ===== Add Events =====

//

