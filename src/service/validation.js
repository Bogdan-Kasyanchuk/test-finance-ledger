import { nameRegex, emailRegex } from 'helpers/regex';
import { LIMIT } from 'helpers/constants';

export const validation = {
  name: {
    required: 'This is a required field',
    minLength: {
      value: LIMIT.NAME_MIN,
      message: 'The name must contain min 3 characters!',
    },
    pattern: {
      value: nameRegex,
      message: 'Enter the desired name format!',
    },
  },
  email: {
    required: 'This is a required field',
    pattern: {
      value: emailRegex,
      message: 'Enter the desired email format!',
    },
  },
};
