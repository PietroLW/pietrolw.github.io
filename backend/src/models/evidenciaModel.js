import { DataTypes } from "sequelize";
import { conn } from "../config/conn.js";

export const evidenciaModel = conn.define(
    "evidencias",

    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        titulo: {
            type: DataTypes.STRING(150),
            allowNull: false,
            validate: {
                notEmpty: {msg: "O título do registro não pode ser enviado vazio"},

            }
        },

        conteudo_texto: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {msg: "A descrição ou reflexão é obrigatória para o portfólio"}
            }
        },

        tipo_registro: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                isIn: {
                    args: [['código', 'imagem', 'video', 'relatorio', 'texto']],
                    msg: "Tipo de registro inválido para os padrões do SENAI."
                }
            }
        },

        arquivo_url: {
            type: DataTypes.STRING(255),
            allowNull: true,
            validate: {
                min: 1,
                max: 4
            }
        }
    },
    {
        timestamps: false
    }
)