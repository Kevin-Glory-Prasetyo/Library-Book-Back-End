import { Router } from "express";
const router = Router();

import { dataAdmin, tambahAdmin } from "../controller/dataAdminController.js";

router.get('/admin',dataAdmin)
router.post('/tambahAdmin',tambahAdmin)

export default router;