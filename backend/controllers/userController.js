const User = require("../models/userModel");

const getUser = async (req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log("error =>", error.message);
    res.status(500).send({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { fullname, nickname, dateOfBirth, age, gender } = req.body;
    if (!fullname || !nickname || !dateOfBirth || !age || !gender) {
      return res.status(400).send({
        message:
          "Send all required fields: fullname, nickname, dateOfBirth, age, gender",
      });
    }
    const newUser = {
      fullname: fullname,
      nickname: nickname,
      dateOfBirth: dateOfBirth,
      age: age,
      gender: gender,
    };

    const user = await User.create(newUser);

    return res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const getUserByID = async (request, response) => {
  try {
    const { id } = request.params;

    const book = await User.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const updateUser = async (request, response) => {
  try {
    if (
      !request.body.fullname ||
      !request.body.nickname ||
      !request.body.dateOfBirth ||
      !request.body.age ||
      !request.body.gender
    ) {
      return response.status(404).send({
        message:
          "Send all required fields: fullname, nickname, dateOfBirth, age, gender",
      });
    }

    const { id } = request.params;

    const result = await User.findById(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    return response.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;

    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getUser, createUser, getUserByID, updateUser, deleteUser };
