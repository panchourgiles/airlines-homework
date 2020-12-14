import { colors, fonts, spacing } from '@styles';
import ReactSelect from 'react-select';
import styled from 'styled-components';

const customStyle = {
  control: (base, state) => {
    return {
      ...base,
      backgroundColor: state.isDisabled ? colors.grayLightest : colors.white,
      borderRadius: 6,
      borderColor: state.isFocused ? colors.primary : colors.grayLight,
      '&:hover': { borderColor: colors.grayLight },
      boxShadow: 'none',
      cursor: state.isDisabled ? 'not-allowed' : 'pointer',
      fontSize: `${fonts.size.medium}`,
      padding: `${spacing.xsmall} ${spacing.xsmall}`,
      marginTop: spacing.xsmall
    };
  },
  option: (provided, state) => {
    return {
      ...provided,
      backgroundColor:
        state.isSelected || state.isFocused
          ? colors.grayLightest
          : colors.white,
      color:
        state.isSelected || state.isFocused ? colors.primary : colors.black,
      fontSize: `${fonts.size.medium}`,
      padding: `${spacing.xsmall} ${spacing.xsmall}`,
      width: '100%'
    };
  }
};

const Select = ({
  label,
  name,
  required,
  options,
  disabled,
  value,
  isSearchable,
  onChange
}) => {
  return (
    <>
      {label !== '' ? (
        <Label htmlFor={name}>
          {label}
          {required && '*'}
        </Label>
      ) : null}

      <ReactSelect
        styles={customStyle}
        name={name}
        options={options}
        isDisabled={disabled}
        value={value}
        isSearchable={isSearchable}
        onChange={onChange}
      />
    </>
  );
};

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: ${spacing.xsmall};
`;

export default Select;
