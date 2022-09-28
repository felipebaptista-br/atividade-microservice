const fetch = require('node-fetch');

const mongoose = require('mongoose');
const repository = require('../repositories/produto-repository')


exports.get = async (req, res, next) => {
    try {
        const data = await repository.getProduto();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send({ message: "Erro ao pesquisar!" });
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({ message: "Criado com sucesso!" });

        enviarEmail(req).then((data) => {
        })

    } catch (error) {
        res.status(404).send({ message: "Erro ao Enviar os Dados!" });
    }
}


async function enviarEmail(req) {
    data = {
        "emailFrom": "brunofigueiredo1120@gmail.com",
        "emailTo": "brunofigueiredo1120@gmail.com",
        "subject": "Produto Cadastrado "+ req.body.title,
        "text": "Este email foi enviado a partir da API de produto \nProduto: " + req.body.title + "\nDescrição: " + req.body.description + "\nPreço: " + req.body.price + "\nCategoria: " + req.body.categoria
    }
    const response = await fetch('http://localhost:8080/send-email', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'

        },

        body: JSON.stringify(data)
    });
    return response.json();
}

exports.put = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        await repository.put(id, body);
        res.status(200).send({ message: "Atualizado com sucesso!" });
    } catch (error) {
        res.status(404).send({ message: "Erro ao Atualizar os Dados!" });
    }
}

exports.delete = async (req, res, next) => {
    const id = req.params.id;
    await repository.delete(id);
    try {
        const id = req.params.id;
        await repository.delete(id);
        res.status(200).send({ message: "Deletado com sucesso!" });
    } catch (error) {
        res.status(404).send({ message: "Erro ao tentar Deletar!" });
    }
}
