import { Router } from "express";
const router = Router();

import { dataAdmin } from "../controller/dataAdminController.js";

router.get('/admin',dataAdmin)

export default router;