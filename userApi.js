const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'Ajay', createdOn: new Date(), gender: 'male', dob: '07-02-2000',
   city: 'Pune', state: 'Mah', pincode: '53002', modifiedOn: new Date() },
  { id: 2, name: 'Karan', createdOn: new Date(), gender: 'female', dob: '08-03-2001',
   city: 'Dehli', state: 'Dehli', pincode: '63002', modifiedOn: new Date() }
];

// Get all users
app.get('/users', (req, res) => {
  res.send(users);
});

// Create new user
app.post('/users', (req, res) => {
  const { name, gender, dob, city, state, pincode } = req.body;
  const id = users.length + 1;
  const createdOn = new Date();
  const modifiedOn = new Date();
  const newUser = { id, name, createdOn, gender, dob, city, state, pincode, modifiedOn };
  users.push(newUser);
  res.status(201).send(newUser);
});

//Update existing user
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, gender, dob, city, state, pincode } = req.body;
  const user = users.find(user => user.id === parseInt(id));
  if (!user) return res.status(404).send('User not found');
  user.name = name 
  user.gender = gender 
  user.dob = dob 
  user.city = city 
  user.state = state
  user.pincode = pincode 
  user.modifiedOn = new Date();
  res.send(user);
});

// Delete existing user
app.delete('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
  
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.sendStatus(204);
    } else {
      res.status(404).send(`User with id ${userId} not found`);
    }
  });

app.listen(port, () => {
  console.log(`listining on ${port}`);
});
