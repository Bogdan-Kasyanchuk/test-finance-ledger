import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import ButtonText from 'components/ButtonText/ButtonText';
import {
  size,
  errorColor,
  placeholderColor,
  borderInput,
  duration,
  timing,
} from 'styles/variables';
import { sendFormNetlify } from 'service/formNetlify';
import { validation } from 'service/validation';
import { TITLE_FORM } from 'helpers/constants';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const createUser = credentials => {
    sendFormNetlify(credentials);
    reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(createUser)}>
      <InputWrapper>
        <Label>
          <Input
            type="text"
            {...register('name')}
            placeholder="Jacob Mercer"
            title={TITLE_FORM.NAME}
          />
          <Placeholder className="placeholder">Enter your name</Placeholder>
          {errors?.name && (
            <ErrorWrapper>
              <Icon iconName="error" width="12px" height="12px" />
              <Span>{errors?.name?.message || 'Error!'}</Span>
            </ErrorWrapper>
          )}
        </Label>
        <Label>
          <Input
            type="email"
            {...register('email', validation.email)}
            placeholder="example@mail.com"
            title={TITLE_FORM.EMAIL}
          />
          <Placeholder className="placeholder">Enter email*</Placeholder>
          {errors?.email && (
            <ErrorWrapper>
              <Icon iconName="error" width="12px" height="12px" />
              <Span>{errors?.email?.message || 'Error!'}</Span>
            </ErrorWrapper>
          )}
        </Label>
      </InputWrapper>
      <ButtonText type="submit">Send</ButtonText>
    </form>
  );
};

export default Form;

const InputWrapper = styled.div`
  margin-bottom: 40px;

  ${size.desktopMin} {
    margin-bottom: 60px;
  }
`;

const Label = styled.label`
  position: relative;
  display: block;

  :not(:last-child) {
    margin-bottom: 32px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  line-height: 1.44;
  border: ${borderInput};
  outline: none;

  ${size.tabletMin} {
    font-size: 18px;
    line-height: 1.28;
  }

  ::placeholder {
    color: ${placeholderColor};
    opacity: 0;
    transition: opacity ${duration} ${timing};
  }

  :not(:placeholder-shown) + .placeholder,
  :focus-visible + .placeholder {
    transform: translateY(-185%);
  }

  :focus-visible::placeholder {
    opacity: 0.4;
  }
`;

const Placeholder = styled.span`
  position: absolute;
  top: 50%;
  left: 8px;
  font-size: 16px;
  line-height: 1.44;
  color: ${placeholderColor};
  transform: translateY(-50%);
  cursor: text;
  transition: transform ${duration} ${timing};

  ${size.tabletMin} {
    font-size: 18px;
    line-height: 1.28;
  }
`;

const ErrorWrapper = styled.span`
  position: absolute;
  top: 45px;
  left: 0;
  display: flex;
  align-items: center;
  color: ${errorColor};

  .icon {
    position: relative;
    top: 1px;
    margin-right: 4px;
  }
`;

const Span = styled.span`
  font-size: 12px;
  line-height: 1;
`;
