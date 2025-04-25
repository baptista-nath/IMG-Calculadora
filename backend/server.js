// server.js
const express = require("express");
const cors = require("cors");
const db = require("./db"); // <- importa sua conexão MySQL

const app = express();
app.use(cors());
app.use(express.json());

// Rota para salvar dados
app.post("/dados", (req, res) => {
  const { nome, altura, peso, imc, classificacao } = req.body;

  const sql = "INSERT INTO usuarios (nome, altura, peso, imc) VALUES (?, ?, ?, ?)";
  db.query(sql, [nome, altura, peso, imc], (err, result) => {
    if (err) {
      console.error("Erro ao inserir dados:", err);
      return res.status(500).json({ erro: "Erro ao inserir no banco" });
    }
    res.json({ mensagem: "Dados salvos com sucesso!" });
  });
});

app.listen(3001, () => {
  console.log("🚀 Servidor rodando na porta 3001");
});
