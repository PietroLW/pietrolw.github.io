import { Router } from "express"
import { cadastrarAtividade } from "../controllers/atividadeController.js"

const router = Router();

router.post("/atividades", cadastrarAtividade);

export default router