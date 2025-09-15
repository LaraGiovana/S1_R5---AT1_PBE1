const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.get('/soma', (req, res) => {
    try {
        const num1 =(numero1);
        const num2 =(numero2);
        const num3 =(numero3);

        if(
            numero1 === undefined ||
            numero2 === undefined ||
            numero3 === undefined
        )

        res.status(201).json({ message: `Pagina principal de mensagem` });
    } catch (error) {
        console.log({menssage:`Valores não encontrados`});
        res.status(500).json(error);
    }

});
app.listen(PORT, () => {
    console.log(`Servidor executando em http:localhost:${PORT}`);
});