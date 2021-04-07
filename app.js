const express = require('express');

const app = express();

//fungsi memanggil folder public
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.get('/dashboard_mentor', (req, res) => {
  res.render('dashboard_mentor.ejs');
});

app.get('/dashboard_student', (req, res) => {
  res.render('dashboard_student.ejs');
});

app.get('/materi_mentor', (req, res) => {
  res.render('materi_mentor.ejs');
});

app.get('/materi_student', (req, res) => {
  res.render('materi_student.ejs');
});

app.get('/kelola_materi', (req, res) => {
  res.render('kelola_materi.ejs');
});

app.get('/pilih_materi', (req, res) => {
  res.render('pilih_materi.ejs');
});

app.get('/upload_materi', (req, res) => {
  res.render('upload_materi.ejs');
});

app.listen(3000);