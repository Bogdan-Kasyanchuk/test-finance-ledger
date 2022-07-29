import { emailRegex } from 'helpers/regex';

export const validation = {
  email: {
    required: 'This is a required field',
    pattern: {
      value: emailRegex,
      message: 'Enter the desired email format!',
    },
  },
};
