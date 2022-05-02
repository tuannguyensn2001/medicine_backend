import express from 'express';
import {login} from "../controllers/auth.controller.mjs";
import interceptor from "../interceptor/interceptor.mjs";

const router = express.Router();

router.get('/', (req, res) => res.send("hello abc"))
router.get('/v1/auth/login', interceptor(login));


export default router;
