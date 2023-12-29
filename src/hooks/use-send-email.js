import axios from 'axios';
import { useMutation } from 'react-query';

export const EMAIL_FILE = 'email.php';

const sendEmail = async ({ name, email, phone, message, productLink }) => {
  const payload = {
    key: 'email-token',
    subject: `Запитване от ${name}`,
    message: `
      --------
      Имейл: ${email}
      Телефон: ${phone} ${productLink ? `\n      Относно: ${productLink}` : ''}
      --------
      ${message}
    `
  };

  try {
    const { data } = await axios.post(EMAIL_FILE, payload);
    console.log(data);
  } catch (error) {
    console.log('ERROR SENDING EMAIL');
    console.log(error);
  }
};

export const useSendEmail = (options) => useMutation(sendEmail, options);
