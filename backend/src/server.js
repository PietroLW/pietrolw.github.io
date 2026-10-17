import app from "./app.js";
import { conn } from "./config/conn.js";
import { atividadeModel } from "./models/atividadeModel.js";

const PORT = 3000;

const iniciarServidor = async () => {
    try {
        await conn.sync()
        console.log("Banco de dados conectado.")

        app.listen(PORT, () => {
        console.log(`Servidor rodando: http://localhost:${PORT}`);
});
    } catch (error) {
        console.log("Erro ao iniciar o servidor: ", error)
    }
};

iniciarServidor();