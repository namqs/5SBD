const Passagem = require('../models/Passagem');
const Voo = require('../models/Voo');

// Adicionar uma nova passagem
exports.adicionarPassagem = async (req, res) => {
  try {
    const { codigo_passagem, classe, preco, data_compra, status, vooId } = req.body;

    const novaPassagem = await Passagem.create({
      codigo_passagem,
      classe,
      preco,
      data_compra,
      status,
      vooId,
    });

    res.status(201).json({ message: 'Passagem adicionada com sucesso!', passagem: novaPassagem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar todas as passagens
exports.listarPassagens = async (req, res) => {
  try {
    const passagens = await Passagem.findAll();
    res.status(200).json(passagens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cancelar uma passagem
exports.cancelarPassagem = async (req, res) => {
  try {
    const { id } = req.params;

    const passagem = await Passagem.findByPk(id);
    if (!passagem) {
      return res.status(404).json({ error: 'Passagem não encontrada!' });
    }

    await passagem.cancelar_passagem();
    res.status(200).json({ message: 'Passagem cancelada com sucesso!', passagem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Alterar o voo de uma passagem
exports.alterarVooPassagem = async (req, res) => {
  try {
    const { id } = req.params;
    const { novoVooId } = req.body;

    const passagem = await Passagem.findByPk(id);
    if (!passagem) {
      return res.status(404).json({ error: 'Passagem não encontrada!' });
    }

    const novoVoo = await Voo.findByPk(novoVooId);
    if (!novoVoo) {
      return res.status(404).json({ error: 'Novo voo não encontrado!' });
    }

    await passagem.alterar_voo(novoVoo);
    res.status(200).json({ message: 'Voo alterado com sucesso!', passagem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
