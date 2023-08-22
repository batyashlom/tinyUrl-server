import  express from "express";
import LinkController from "../Controllers/linkController.js"
const router = express.Router();

router.get('/',LinkController.getList);
router.get('/:id',LinkController.getById);
// router.put('/:id',UserController.update);
router.post('/',LinkController.add);
// router.delete('/:id',UserController.delete);

export default router;