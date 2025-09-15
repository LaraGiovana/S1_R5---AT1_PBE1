const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.get('/mensagem', (req, res) => {
    try {
        res.status(201).json({ message: `Pagina principal de mensagem` });
    } catch (error) {
        res.status(500).json(error);
    }

});

app.post('/mensagem', (req, res) => {
    try {
        const { novaMensagem } = req.body;
        console.log(novaMensagem);
        res.status(201).json({ message: `Olá, Carlos! Você tem 18 anos e troce para o Real Madri` });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

app.listen(PORT, () => {
    console.log(`Servidor executando em http:localhost:${PORT}`);
});
