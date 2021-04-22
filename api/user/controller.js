const { v4: uuidv4 } = require("uuid");

let users = [
  {
    id: 1,
    nom: "nom",
    prenom: "prenom",
    email: "email",
    phone: "phone",
    isActif: true,
  },
];

const getUsers = (req, res) => {
  res.status(200).send(users);
};
const addUser = (req, res) => {
  const { nom, prenom, phone, email } = req.body;
  const user = {
    id: uuidv4(),
    nom,
    prenom,
    email,
    phone,
    isActif: true,
  };
  users.push(user);
  res.status(201).send(user);
};
const updateUser = (req, res) => {
  const { id } = req.params;
  const { nom, prenom, email, phone } = req.body;

  const user = users.find((elem) => elem.id == id);
  if (!user) {
    return res.status(400).send({
      message: "user not found",
    });
  }

  user.nom = nom || user.nom;
  user.prenom = prenom || user.prenom;
  user.email = email || user.email;
  user.phone = phone || user.phone;

  res.status(200).send(user);
};
const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((elem) => elem.id == id);
  if (!user) {
    return res.status(400).send({
      message: "user not found",
    });
  }
  users = users.filter((elem) => elem.id != id);
  res.status(200).send(user);
};
const getOneUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((elem) => elem.id == id);
  if (!user) {
    return res.status(400).send({
      message: "user not found",
    });
  }
  res.status(200).send(user);
};
const patchUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((elem) => elem.id == id);
  if (!user) {
    return res.status(400).send({
      message: "user not found",
    });
  }
  user.isActif = !user.isActif;
  res.status(200).send(user);
};

module.exports = {
  getUsers,
  getOneUser,
  addUser,
  updateUser,
  deleteUser,
  patchUser,
};
