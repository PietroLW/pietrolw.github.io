import { DataTypes } from "sequelize";
import { conn } from "../config/conn.js";

export const atividadeModel = conn.define(
    "atividades",
    {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        titulo: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: {
                    args: [1, 50],
                    msg: "O título deve ter entre 1 e 50 caracteres"
                }
            }
        },

        conteudo_texto: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        tipo_registro: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        bimestre: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: {
                    args: [1],
                    msg: "O bimestre deve ser no mínimo 1."
                },
                max: {
                    args: [4],
                    msg: "O bimestre deve ser no máximo 4."
                }
            }
        },

        arquivo_url: {
            type: DataTypes.STRING(255),
            allowNull: true
        },

        usuario_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },

        area_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },

        secao_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "atividades",
        timestamps: true
    }
);