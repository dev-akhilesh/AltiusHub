const express = require('express');
const router = express.router();



router.post('/register', register)
router.post('/login', login)
router.get('/userprofile', authMiddleware, getProfile);
router.get('/tasks', getAllTasks)
router.post('/tasks', addTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)