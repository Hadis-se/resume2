import express from 'express';
import {saveUsers} from '../db/mongodb.mjs';
import bcrypt from 'bcrypt';
import {findUserByEmail} from '../db/mongodb.mjs';
import e from 'express';


export const authRouter = express.Router();



authRouter.get("/", (req, res) => {
    res.send(
         'Auth router'	
    );
});

authRouter.post("/create", async (req, res) => {

    if (!req?.body?.name ){
        res.statusCode=422;
        return res.json({
            status: 'name is required'});
       
    }
    if(!req?.body?.email) {
        res.statusCode=422;
        return res.json({
            status: 'email is required'});
        
    }
    if(!req?.body?.password)  {
        res.statusCode=422;
        return res.json({
            status: 'password is required'});
       
        
    }
    
    const password = req?.body?.password || '';
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log('hash', hashedPassword)

    // console.log('isTrue', bcrypt.compareSync(password, `${hash}1`));

    const existUser = await findUserByEmail(req.body.email);
    if (existUser?.email) {
        res.statusCode=403;
        return res.json({
            status: "User already exist"
        });
    }
    console.log(existUser);

    const result = await saveUsers({
        name: req?.body?.name,
        email: req?.body?.email,
        hashedPassword: hashedPassword
        
    });
    console.log(result)

    res.json({
        _id: result?.insertedId,
        email: req.body.email,

        message : 'User created'
    });
 });