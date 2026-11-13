
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


let inventory = [
    { id: 1, prodname: "prod1", qty: 12, price: 12 },
    { id: 2, prodname: "prod2", qty: 1, price: 13 },
    { id: 3, prodname: "prod3", qty: 10, price: 14 },
    { id: 4, prodname: "prod4", qty: 19, price: 16 }
];

app.get('/', (req, res) => {
    res.json(inventory);
});

app.post('/add', (req, res) => {

    console.log(req.body);

    const invent = {
        id: Number(req.body.id),
        prodname: req.body.prodname,
        qty: Number(req.body.qty),
        price: Number(req.body.price)
    };

    inventory.push(invent);

    res.json(inventory);
});

app.listen(8000, () => {
    console.log(
        'Express is working at http://localhost:8000'
    );
});
