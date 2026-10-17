import { atividadeModel } from "../models/atividadeModel.js";

export const cadastrarAtividade = async (req, res) => {
    try {
        const {titulo, conteudo_texto, tipo_registro, bimestre, arquivo_url, usuario_id, area_id, secao_id} = req.body;

        const novaAtividade = await atividadeModel.create({
            titulo, 
            conteudo_texto, 
            tipo_registro, 
            bimestre, 
            arquivo_url, 
            usuario_id, 
            area_id, 
            secao_id
        })

        return res.status(201).json({
            mensagem: "Atividade cadastrada com sucesso!",
            atividade: novaAtividade
        })
        
    } catch (error) {
        return res.status(500).json({
            mensagem: "Erro ao cadastrar a atividade",
            erro: error.message
        });
    }
};