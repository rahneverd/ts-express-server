import express from 'express';

const app = express();

let PORT = 3000

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});