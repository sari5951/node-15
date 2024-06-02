// import express from 'express';
// import bodyParser from 'body-parser';
// import routes from './src/routers/validEmailAPI.routers';
// import loggerMiddleware from './src/middleware/logger.middleware';
// import verifyEmails from './src/controller/validEmail.controller';


// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(loggerMiddleware);
// app.use('/', routes);

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// // הצגת האימיילים התקינים
// routes.post('/verify-emails', async (req, res) => {
//     try {
//         const textFile = req.body.textFile;
//         const validEmails = await verifyEmails(textFile);
//         res.status(200).json({ validEmails });
//     } catch (error) {
//         console.error('Error verifying emails:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });
import express from 'express';
import bodyParser from 'body-parser';
import loggerMiddleware from './src/middleware/logger.middleware';
import validEmailRouter from './src/routers/validEmailAPI.routers';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(loggerMiddleware);

// Routes
app.use('/api', validEmailRouter);

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
