import express from 'express';
import { PORT,NODE_ENV } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.get('/',(req,res)=> {
    res.send('Welcome to the Subscription Tracker API');
    console.log(`Connected to database in ${NODE_ENV} mode`);
});

app.listen(PORT, async ()=>{
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
    await connectToDatabase()
});

export default app;