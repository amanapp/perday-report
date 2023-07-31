import express from 'express';
import bodyParser from 'body-parser';

import signup from './src/routes/users/signup.routes';
import login from './src/routes/users/login.routes';
import get_user from './src/routes/users/get_profile.routes';
import jwtMiddleware from './src/middleware/jwt.middleware';
import delete_user from './src/routes/users/delete.routes';
import user_update from './src/routes/users/update.routes';
import pass_forget from './src/routes/users/forget_password.routes';
import gen_otp from './src/routes/users/generate_pass.routes';
const app = express();
app.use(express.json());
// app.use(bodyParser.urlencoded);
// app.use(bodyParser.json);


import add_address from './src/routes/users/add_address.routes';
import update_address from './src/routes/users/update_address';
import add_product from './src/routes/product/add.routes';
import delete_product from './src/routes/product/delete.routes';
import update_product from './src/routes/product/upadatey.routes';
import get_product_details from './src/routes/product/product_details.routes';
import product_bidding from './src/routes/product/bidding';
import add_profile_photos from './src/routes/users/add_profile_photo';
import auth from './src/middleware/session';
import { upload } from './src/middleware/multer.middleware';
import add_product_photos from './src/routes/product/add_product_pic';
import Category from './src/database/models/categries';
import { loginJoiMiddleware, signUpJoiMiddleware } from './src/middleware/joi.middleware';
import swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
import * as path from 'path';
const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml')); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));// get users detail of sign up 
Category
// signup
app.post('/signup',signUpJoiMiddleware,signup );

// login
app.post('/login',loginJoiMiddleware ,login);

// get user
app.get('/get_user',auth,get_user);

//delete user profile
app.delete('/delete',jwtMiddleware,delete_user);

//upadte user profile
app.put('/update',jwtMiddleware,user_update)

//upload photos
app.put('/upload/photos',upload.single('image'),jwtMiddleware,add_profile_photos)

//generate otp
app.post('/gen_otp',gen_otp)

//forget user password
app.put('/forget-password',pass_forget)

//add address
app.post('/user/address',jwtMiddleware,add_address)

//update  address
app.put('/user/address',jwtMiddleware,update_address)

//===========product===============

//add product
app.post('/product/add',jwtMiddleware,add_product);

//delete product
app.post('/product/delete',jwtMiddleware,delete_product)

//update product 
app.put('/product/update',jwtMiddleware,update_product)


//update product image
app.put('/product/image',upload.single('image'),jwtMiddleware,add_product_photos)

//product details
app.get('/product/details',auth,get_product_details)

//bidding 
app.put('/product/bidding',jwtMiddleware,product_bidding)

app.listen(3000, () => {
  console.log('Server started on port 3000');
});