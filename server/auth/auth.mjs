import express from 'express';
export const authRouter = express.Router();
import {saveUsers} from '../db/mongodb.mjs';

authRouter.get("/", (req, res) => {
    res.send(
         'Auth router'	
    );
});

authRouter.post("/create", async (req, res) => {
    const result = await saveUsers(req.body);
    res.json({
        ...result,
        message : 'User created'
    });
});