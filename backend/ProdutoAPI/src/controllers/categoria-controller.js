const { response } = require('express');
const mongoose = require('mongoose');
const repository = require('../repositories/categoria-repository')


exports.get = async (req, res, next) => {
    try {
        const data = await repository.getCateg();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send({ message: "Erro ao pesquisar!" });
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({ message: "Criado com sucesso!" });
    } catch (error) {
        res.status(404).send({ message: "Erro ao Enviar os Dados!" });
    }
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