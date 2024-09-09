const Pessoa = require('../models/Pessoa');

class PessoaController {
  
  static async create(req, res) {
    try {
      const { nome, cpf, telefone } = req.body;
      const pessoa = await Pessoa.create({ nome, cpf, telefone });
      return res.status(201).json(pessoa);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar pessoa', details: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const pessoas = await Pessoa.findAll();
      return res.status(200).json(pessoas);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar pessoas', details: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const pessoa = await Pessoa.findByPk(id);
      if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada' });
      }
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar pessoa', details: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, cpf, telefone } = req.body;
      const pessoa = await Pessoa.findByPk(id);
      if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada' });
      }
      await pessoa.update({ nome, cpf, telefone });
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar pessoa', details: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const pessoa = await Pessoa.findByPk(id);
      if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada' });
      }
      await pessoa.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir pessoa', details: error.message });
    }
  }
}

module.exports = PessoaController;