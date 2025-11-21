import { Router } from "express";
const router = Router();

import { dataAdmin, tambahAdmin, deleteAdmin , detailAdmin, updateAdmin} from "../controller/dataAdminController.js";

router.get('/admin',dataAdmin)
router.get('/admin/:id',detailAdmin)
router.post('/tambahAdmin',tambahAdmin)
router.put('/updateAdmin/:id',updateAdmin)
router.delete('/deleteAdmin/:id',deleteAdmin)

export default router;