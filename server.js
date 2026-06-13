const express = require("express");
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Arnold" },
    { id: 2, name: "John" }
];

// Get all users
app.get("/users", (req, res) => {
    res.json(users);
});

// Get user by ID
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    res.json(user);
});

// Create user
app.post("/users", (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            error: "Name is required"
        });
    }

    const newUser = {
        id: users.length + 1,
        name
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

// Update user
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    user.name = name;

    res.json({
        message: "User Updated",
        user
    });
});

// Delete user
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    users.splice(index, 1);

    res.json({
        message: "User Deleted"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});