import axios from 'axios';

// הוספת המפתח החדש לביקשת ה-API
const EMAIL_VERIFICATION_API_URL = 'https://app.abstractapi.com/api/email-validation/tester';
const API_KEY = '5397237c27b44779a40c4fadd5e939d1'; // יש להשליף את המפתח מהמשתמש

async function verifyEmails(textFile: string): Promise<string[]> {
    try {
        // שימוש במפתח ה-API בבקשה ל-API
        const response = await axios.post(EMAIL_VERIFICATION_API_URL, {
            text: textFile,
            api_key: API_KEY // הוספת המפתח כפרמטר לבקשה
        });
        const responseData = response.data;
        if (responseData && responseData.valid_emails) {
            return responseData.valid_emails;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error verifying emails:', error);
        throw new Error('Error verifying emails');
    }
}

export default verifyEmails;
