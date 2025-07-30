const express = require('express');
const app = express();

app.use(express.json());
app.use('/', require('./route/postsRoute'));
app.use(function (error, req, res, next) {
	if (error.message === 'Post already exists') {
		return res.status(409).send(e.message);
	}
	if (error.message === 'Post not found') {
		return res.status(404).send(e.message);
	}
	res.status(500).send(error.message);
});

app.get('/health', (req, res) => {
	res.status(200).send('OK');
});

app.listen(3000, '0.0.0.0', () => {
	console.log('Servidor iniciado na porta 3000');
});

