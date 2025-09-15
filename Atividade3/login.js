const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.get('/login', (req, res) => {
    try {
        res.status(201).json({ message: `Pagina principal de mensagem` });
    } catch (error) {
        res.status(500).json(error);
    }

});

app.post('/login', (req, res) => {
    try {
        const { usuario, senha } = req.body;
        console.log(usuario);
        if(!usuario || isNaN(senha)){

            res.status(400).json({ message: `Digite corretamente os dados!` });
        }
        if(usuario.toLowerCase() == 'lara' && senha === 1234) {

            res.status(201).json({ message: `Você entrou com sucesso!` });
        } else{
            res.status(401).json({ message: `Usuario ou senha incorreto!` });

        }

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

app.listen(PORT, () => {
    console.log(`Servidor executando em http:localhost:${PORT}`);
});
