import express from 'express';
import signup from './routes/users/signup.routes';
import login from './routes/users/login.routes';
import get_user from './routes/users/get_profile.routes';
import jwtMiddleware from './middleware/jwt.middleware';
import delete_user from './routes/users/delete.routes';
import user_update from './routes/users/update.routes';
import pass_forget from './routes/users/forget_password.routes';
import gen_otp from './routes/users/generate_pass.routes';
import add_address from './routes/users/add_address.routes';
import update_address from './routes/users/update_address';
import add_product from './routes/product/add.routes';
import delete_product from './routes/product/delete.routes';
import update_product from './routes/product/upadatey.routes';
import get_product_details from './routes/product/product_details.routes';
import product_bidding from './routes/product/bidding';
import add_profile_photos from './routes/users/add_profile_photo';
import auth from './middleware/session';
import { upload } from './middleware/multer.middleware';
import add_product_photos from './routes/product/add_product_pic';
import Category from './database/models/categries';
import { ProductJoiMiddleware, addressJoiMiddleware, loginJoiMiddleware, signUpJoiMiddleware } from './middleware/joi.middleware';
// import swaggerUi from 'swagger-ui-express';
// import YAML from 'yamljs';
// import * as path from 'path';
import get_product_filter from './routes/product/filter.routes';

const app = express();
app.use(express.json());


// const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml')); 

// //swagger implementation
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
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
app.post('/user/address',addressJoiMiddleware,jwtMiddleware,add_address)

//update  address
app.put('/user/address',jwtMiddleware,update_address)


//add product
app.post('/product/add',ProductJoiMiddleware,jwtMiddleware,add_product);

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

app.get('/categries/filter',get_product_filter)

app.listen( 3000,() => {
  console.log('Server started on port 3000');
});