import express from 'express';


const app = express()

app.listen(444, () => console.log('API running on port  '))
app.get('/', (req, res) => res.json('My flyTOEZ API is running '))