import { fonts, spacing } from '@styles';
import styled from 'styled-components';

const RadioInput = ({
  id,
  label,
  name,
  checked = false,
  value,
  onChange,
  ...rest
}) => {
  return (
    <Wrapper>
      <Radio
        id={id}
        name={name}
        type="radio"
        checked={checked}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {label && <Label htmlFor={id}>{label}</Label>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  margin-right: ${spacing.xsmall};
`;

const Radio = styled.input`
  margin: 0.4rem;
`;

const Label = styled.label`
  font-size: ${fonts.size.medium};
`;

export default RadioInput;
