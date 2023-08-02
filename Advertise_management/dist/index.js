"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_routes_1 = __importDefault(require("./routes/users/signup.routes"));
const login_routes_1 = __importDefault(require("./routes/users/login.routes"));
const get_profile_routes_1 = __importDefault(require("./routes/users/get_profile.routes"));
const jwt_middleware_1 = __importDefault(require("./middleware/jwt.middleware"));
const delete_routes_1 = __importDefault(require("./routes/users/delete.routes"));
const update_routes_1 = __importDefault(require("./routes/users/update.routes"));
const forget_password_routes_1 = __importDefault(require("./routes/users/forget_password.routes"));
const generate_pass_routes_1 = __importDefault(require("./routes/users/generate_pass.routes"));
const add_address_routes_1 = __importDefault(require("./routes/users/add_address.routes"));
const update_address_1 = __importDefault(require("./routes/users/update_address"));
const add_routes_1 = __importDefault(require("./routes/product/add.routes"));
const delete_routes_2 = __importDefault(require("./routes/product/delete.routes"));
const upadatey_routes_1 = __importDefault(require("./routes/product/upadatey.routes"));
const product_details_routes_1 = __importDefault(require("./routes/product/product_details.routes"));
const bidding_1 = __importDefault(require("./routes/product/bidding"));
const add_profile_photo_1 = __importDefault(require("./routes/users/add_profile_photo"));
const session_1 = __importDefault(require("./middleware/session"));
const multer_middleware_1 = require("./middleware/multer.middleware");
const add_product_pic_1 = __importDefault(require("./routes/product/add_product_pic"));
const categries_1 = __importDefault(require("./database/models/categries"));
const joi_middleware_1 = require("./middleware/joi.middleware");
// import swaggerUi from 'swagger-ui-express';
// import YAML from 'yamljs';
// import * as path from 'path';
const filter_routes_1 = __importDefault(require("./routes/product/filter.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml')); 
// //swagger implementation
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
categries_1.default;
// signup
app.post('/signup', joi_middleware_1.signUpJoiMiddleware, signup_routes_1.default);
// login
app.post('/login', joi_middleware_1.loginJoiMiddleware, login_routes_1.default);
// get user
app.get('/get_user', session_1.default, get_profile_routes_1.default);
//delete user profile
app.delete('/delete', jwt_middleware_1.default, delete_routes_1.default);
//upadte user profile
app.put('/update', jwt_middleware_1.default, update_routes_1.default);
//upload photos
app.put('/upload/photos', multer_middleware_1.upload.single('image'), jwt_middleware_1.default, add_profile_photo_1.default);
//generate otp
app.post('/gen_otp', generate_pass_routes_1.default);
//forget user password
app.put('/forget-password', forget_password_routes_1.default);
//add address
app.post('/user/address', joi_middleware_1.addressJoiMiddleware, jwt_middleware_1.default, add_address_routes_1.default);
//update  address
app.put('/user/address', jwt_middleware_1.default, update_address_1.default);
//add product
app.post('/product/add', joi_middleware_1.ProductJoiMiddleware, jwt_middleware_1.default, add_routes_1.default);
//delete product
app.post('/product/delete', jwt_middleware_1.default, delete_routes_2.default);
//update product 
app.put('/product/update', jwt_middleware_1.default, upadatey_routes_1.default);
//update product image
app.put('/product/image', multer_middleware_1.upload.single('image'), jwt_middleware_1.default, add_product_pic_1.default);
//product details
app.get('/product/details', session_1.default, product_details_routes_1.default);
//bidding 
app.put('/product/bidding', jwt_middleware_1.default, bidding_1.default);
app.get('/categries/filter', filter_routes_1.default);
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
//# sourceMappingURL=index.js.map