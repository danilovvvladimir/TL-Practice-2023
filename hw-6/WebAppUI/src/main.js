import "./style.css";

// ===== Constants =====

const API_URL = "https://localhost:7263";

const OFFSET_JSON = 2;

const initialCreateJSON = JSON.stringify(
  {
    confirmPassword: "qwerty",
    email: "ggg@gmail.com",
    firstName: "Vladimir",
    lastName: "Danilov",
    password: "qwerty",
    role: "User",
    title: "eltit title",
  },
  null,
  OFFSET_JSON,
);

const initialUpdateJSON = JSON.stringify(
  {
    firstName: "Vladimir1",
    lastName: "Danilov1",
    title: "yeahhh",
  },
  null,
  OFFSET_JSON,
);

// ===== Get Elements =====

// Buttons

const getAllBtn = document.querySelector("#get-all");
const getOneBtn = document.querySelector("#get");
const createOneBtn = document.querySelector("#create");
const deleteOneBtn = document.querySelector("#delete");
const updateOneBtn = document.querySelector("#update");

// Inputs (ID's)

const getUserIdInput = document.querySelector("#input-get");
const deleteUserIdInput = document.querySelector("#input-delete");
const updateUserIdInput = document.querySelector("#input-update");

// Requests Textarea

const createOneRequestTextarea = document.querySelector("#textarea-request-create");
const updateOneRequestTextarea = document.querySelector("#textarea-request-update");

createOneRequestTextarea.value = initialCreateJSON;
updateOneRequestTextarea.value = initialUpdateJSON;

// Responses Textarea

const getAllResponseTextarea = document.querySelector("#textarea-response-get-all");
const getOneResponseTextarea = document.querySelector("#textarea-response-get");
const createOneResponseTextarea = document.querySelector("#textarea-response-create");
const deleteOneResponseTextarea = document.querySelector("#textarea-response-delete");
const updateOneResponseTextarea = document.querySelector("#textarea-response-update");

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

const updateUser = async (userId, updatedUser) => {
  const options = {
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
  };

  const response = await fetch(`${API_URL}/users/${userId}`, options);

  return response.json();
};

const deleteUser = async id => {
  const options = {
    method: "DELETE",
  };

  const response = await fetch(`${API_URL}/users/${id}`, options);

  return response.json();
};

// ===== Click Handlers Functions =====

const handleGetAllUsers = async () => {
  const allUsers = await getAllUsers();

  getAllResponseTextarea.value = "";
  getAllResponseTextarea.value = JSON.stringify(allUsers, null, OFFSET_JSON);
};

const handleGetUser = async () => {
  const userId = getUserIdInput.value;
  const response = await getUserById(userId);

  getOneResponseTextarea.value = "";
  getOneResponseTextarea.value = JSON.stringify(response, null, OFFSET_JSON);
};

const handleCreateUser = async () => {
  const newUser = createOneRequestTextarea.value;
  const validatedJSON = JSON.parse(newUser);

  const response = await createUser(validatedJSON);

  createOneResponseTextarea.value = "";
  createOneResponseTextarea.value = JSON.stringify(response, null, OFFSET_JSON);
};

const handleDeleteUser = async () => {
  const userId = deleteUserIdInput.value;

  const response = await deleteUser(userId);

  deleteOneResponseTextarea.value = "";
  deleteOneResponseTextarea.value = JSON.stringify(response, null, OFFSET_JSON);
};

const handleUpdateUser = async () => {
  const userId = updateUserIdInput.value;

  const updatedUser = updateOneRequestTextarea.value;
  const validatedJSON = JSON.parse(updatedUser);

  const response = await updateUser(userId, validatedJSON);

  updateOneResponseTextarea.value = "";
  updateOneResponseTextarea.value = JSON.stringify(response, null, OFFSET_JSON);
};

// ===== Add Events =====

getAllBtn.addEventListener("click", handleGetAllUsers);
getOneBtn.addEventListener("click", handleGetUser);
createOneBtn.addEventListener("click", handleCreateUser);
deleteOneBtn.addEventListener("click", handleDeleteUser);
updateOneBtn.addEventListener("click", handleUpdateUser);

//

