import { useMutation } from 'react-query';
import axios from 'axios';

import { EMAIL_FILE } from '../constants/data';
import { selectToken } from '../selectors/token';

const sendEmail = async ({ name, email, phone, message, productLink }) => {
  const token = selectToken();
  const payload = {
    key: token,
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
