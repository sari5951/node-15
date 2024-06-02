import express from 'express';
import verifyEmails from '../controller/validEmail.controller';

const router = express.Router();

router.post('/verify-emails', async (req, res) => {
    const textFile = req.body.textFile;
    try {
        const validEmails = await verifyEmails(textFile);
        res.status(200).json({ validEmails });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
