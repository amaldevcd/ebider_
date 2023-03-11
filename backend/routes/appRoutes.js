import UserRoutes from './userRoutes.js'
import AuthRoutes from './authRoutes.js';
 import itemRoutes from './itemRoutes.js'
// import bidRoutes from './bidRoutes.js'

export default function(app)
{
    app.use('/user', UserRoutes);
     app.use('/auth',AuthRoutes);
    app.use('/item', itemRoutes);
    // app.use('/bid', bidRoutes);
};