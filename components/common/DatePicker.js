import { colors, fonts, spacing } from '@styles';
import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';

const DatePicker = ({
  label,
  name,
  required,
  dateFormat = 'MM/dd/yyyy',
  disabled,
  value,
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
      <WrapperDatePicker>
        <ReactDatePicker
          name={name}
          dateFormat={dateFormat}
          disabled={disabled}
          selected={value ? new Date(value) : null}
          onChange={onChange}
          onChangeRaw={(e) => e.preventDefault()}
          placeholderText={dateFormat.toLowerCase()}
        />
      </WrapperDatePicker>
    </>
  );
};

const WrapperDatePicker = styled.div`
  .react-datepicker {
    font-size: 14px;
  }
  .react-datepicker__current-month {
    font-size: 14px;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container input {
    border: solid 1px ${colors.grayLight};
    border-radius: 6px;
    box-sizing: border-box;
    color: ${colors.gray};
    font-size: ${fonts.size.medium};
    margin-top: ${spacing.xxsmall};
    padding: ${spacing.small} ${spacing.small};
    width: 100%;
    &:disabled {
      background-color: ${colors.grayLightest};
      cursor: not-allowed;
    }
  }
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: ${spacing.xsmall};
`;

export default DatePicker;
