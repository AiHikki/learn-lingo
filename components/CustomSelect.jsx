import { useId } from 'react';
import Select from 'react-select';

const CustomSelect = ({ options, label, width, ...props }) => {
  const id = useId();

  return (
    <>
      <label className="font-medium text-sm text-secondary inline-block mb-2" htmlFor={id}>
        {label}
      </label>
      <Select
        styles={{
          control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? '#f4c550' : '#fff',
            boxShadow: state.isFocused ? 'none' : 'none',
            '&:hover': {
              borderColor: '#f4c550',
            },
            borderRadius: '14px',
            paddingLeft: '18px',
            paddingRight: '14px',
            height: '48px',
            width,
          }),
          singleValue: provided => ({
            ...provided,
            color: '#121417',
            fontWeight: 500,
            fontSize: '18px',
          }),
          placeholder: provided => ({
            ...provided,
            color: '#8a8a89',
            fontWeight: 500,
            fontSize: '18px',
          }),
          dropdownIndicator: provided => ({
            ...provided,
            color: '#121417',
            padding: 0,
          }),
          indicatorSeparator: provided => ({
            ...provided,
            display: 'none',
          }),
          menu: provided => ({
            ...provided,
            borderRadius: '12px',
            marginTop: '4px',
            width,
            padding: '14px 18px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: '#ffffff',
            color: state.isSelected ? '#121417' : '#12141733',
            fontWeight: 500,
            fontSize: '18px',
            padding: 0,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#121417',
            },
          }),
          valueContainer: (provided, state) => ({
            ...provided,
            padding: 0,
          }),
          menuList: (provided, state) => ({
            ...provided,
            padding: 0,
            display: 'flex',
            gap: '8px',
            flexDirection: 'column',
          }),
        }}
        options={options}
        id={id}
        {...props}
      />
    </>
  );
};

export default CustomSelect;
