import  express from "express";
// import UserController from "../Controllers/userController";
import UserController from "../Controllers/userController.js";
const router = express.Router();

router.get('/',UserController.getList);
router.post('/',UserController.add);



export default router;