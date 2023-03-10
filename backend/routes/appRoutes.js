import UserRoutes from './userRoutes.js'
import AuthRoutes from './authRoutes.js';
// import productRoutes from './productRoutes.js'
// import bidRoutes from './bidRoutes.js'

export default function(app)
{
    app.use('/user', UserRoutes);
     app.use('/auth',AuthRoutes);
    // app.use('/product', productRoutes);
    // app.use('/bid', bidRoutes);
};