const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const ConteudoService = require('../services/conteudoService');

const create = async (req, res, next) => {
  check('titulo', 'Titulo e obrigatorio').not().isEmpty(),
    check('tipo', 'Tipo e obrigatorio').not().isEmpty(),
    check('origem', 'Origem e obrigatorio').not().isEmpty(),
    check('duracao', 'Duracao e obrigatorio').not().isEmpty();
  check('link', 'Link e obrigatorio').not().isEmpty();
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { titulo, tipo, origem, duracao, link } = req.body;
  try {
    conteudo = await ConteudoService.create({
      titulo,
      tipo,
      origem,
      duracao,
      link,
    });

    res.status(200).json(conteudo);
    return;
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const getAll = async (req, res, next) => {
  try {
    let conteudos = await ConteudoService.getAll();
    return res.status(200).json(conteudos);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const deleteConteudo = async (req, res, next) => {
  try {
    const { id } = req.params;
    let conteudos = await ConteudoService.deleteConteudo(id);
    return res.status(200).json(conteudos);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
const atualizarConteudo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    let conteudos = await ConteudoService.atualizarConteudo(id, body);
    return res.status(200).json(conteudos);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    let conteudos = await ConteudoService.getOneConteudo({ _id: id });
    return res.status(200).json(conteudos);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports = { create, getAll, deleteConteudo, atualizarConteudo, getOne };
