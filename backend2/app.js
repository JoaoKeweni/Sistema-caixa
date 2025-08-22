const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor backend rodando!');
});

// Criar uma rota para a criação dos Usuarios
app.post('/usuarios', (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios.' });
    }
    // Aqui você poderia adicionar lógica para salvar o usuário no banco de dados
    res.status(201).json({ message: 'Usuário criado com sucesso!', usuario: { nome, email } });
});

app.get('/listar-usuarios', (req, res) => {
    // Aqui você poderia adicionar lógica para buscar usuários no banco de dados
    const usuarios = [
        { id: 1, nome: 'João', email: 'joao@example .com' },
        { id: 2, nome: 'Maria', email: 'maria@example.com' }
    ];
    res.json(usuarios);
});

app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios.' });
    }
    // Aqui você poderia adicionar lógica para atualizar o usuário no banco de dados
    res.json({ message: `Usuário com id ${id} atualizado com sucesso!`, usuario: { id, nome, email } });
});

app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    // Aqui você poderia adicionar lógica para deletar o usuário do banco de dados
    res.json({ message: `Usuário com id ${id} deletado com sucesso!` });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
