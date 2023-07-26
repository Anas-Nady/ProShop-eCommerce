import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "User 1",
    email: "user-1@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Admin",
    email: "user-2@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
