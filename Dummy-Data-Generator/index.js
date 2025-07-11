const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { Dummy } = require('./models/Dummy');

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let names = ["John", "Emma", "Michael", "Sophia", "James", "Olivia", "William", "Ava", "Liam", "Isabella", "Noah", "Ethan", "Lucas", "Charlotte", "Alexander", "Amelia", "Daniel"]
let city = ["Los Angeles", "New York", "London", "Paris", "Tokyo", "Sydney", "Toronto", "Berlin", "Singapore", "Dubai", "Chicago", "Miami", "Rome", "Wellington", "Barcelona", "Seoul", "Amsterdam", "Cape Town", "Las Vegas", "Helsinki"]
let language = ["Python", "Java", "C++", "JavaScript", "GoLang", "PHP", "Ruby", "C", "Typescript", "Rust", "R", "Kotlin", "C#", "Swift", "SQL"]

app.get('/', (req, res) => {
    res.sendFile('templates/index.html', { root: __dirname });
});

function generateData() {

  const randName = names[Math.floor(Math.random() * names.length)];
  const randSalary = (Math.floor(Math.random() * (99 - 10 + 1)) + 10) * 100000;
  const randLang = language[Math.floor(Math.random() * language.length)];
  const randLocation = city[Math.floor(Math.random() * city.length)];
  const randManager = [true, false][Math.floor(Math.random() * 2)];

  const dummy = new Dummy({
    name: randName,
    salary: randSalary,
    language: randLang,
    city: randLocation,
    isManager: randManager,
  });

  dummy.save(); 
  return dummy; 
}

app.get('/submit', async (req, res) => {

  await Dummy.deleteMany({});
  
  let data = [];
  for (let i = 1; i <= 10; i++) {
    const entry = generateData();
    data.push(entry);
  }

  res.json(data); 
});

function startServer() {
    mongoose.connect('mongodb://localhost:27017/Dummy')
        .then(() => {
            console.log('MongoDB connected');
            app.listen(port, () => {
                console.log(`Server running at http://localhost:${port}`);
            });
        })
        .catch((err) => {
            console.error('MongoDB connection error:', err);
        });
}

startServer();
