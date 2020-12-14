import { colors, fonts, spacing } from '@styles';
import styled, { css } from 'styled-components';

const TextInput = ({
  label,
  name,
  required,
  readOnly = false,
  type = 'text',
  onChange,
  ...rest
}) => {
  return (
    <>
      {label && (
        <Label htmlFor={name}>
          {label}
          {required && '*'}
        </Label>
      )}
      <Input
        id={name}
        name={name}
        required={required}
        readOnly={readOnly}
        type={type}
        onChange={onChange}
        {...rest}
      />
    </>
  );
};

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: ${spacing.xsmall};
`;

const Input = styled.input`
  ${(props) =>
    props.readOnly &&
    css`
      background-color: ${colors.grayLightest};
      cursor: not-allowed;
    `}
  border: solid 1px ${colors.grayLight};
  border-radius: 6px;
  box-sizing: border-box;
  color: ${colors.gray};
  font-size: ${fonts.size.medium};
  margin-top: ${spacing.xxsmall};
  padding: ${spacing.small} ${spacing.small};
  transition: border-color 0.25s, box-shadow 0.25s;
  width: 100%;
  &:hover {
    border-color: ${colors.black};
  }
  &:focus {
    border-color: ${colors.black};
    box-shadow: 0px 0px 0px 1px ${colors.grayLightest};
    outline: none;
  }
`;

export default TextInput;
