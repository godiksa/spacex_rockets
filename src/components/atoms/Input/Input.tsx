import { useEffect, useRef } from 'react';
import { StyledInputWrapper, StyledIcon, StyledInput } from './styles';

interface IInputProps {
  type: string;
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  icon?: any;
  placeholder?: string;
}

const Input = ({ type, value, setValue, icon, placeholder }: IInputProps) => {
  const inputWrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleOutsideInputClick = (e: any) => {
      if (!inputWrapperRef.current?.contains(e.target)) {
        inputWrapperRef.current!.style.boxShadow = 'none';
        inputWrapperRef.current!.style.borderColor = 'none';
      }
    };
    document.addEventListener('click', handleOutsideInputClick);

    return () => {
      document.removeEventListener('click', handleOutsideInputClick);
    };
  }, []);

  const handleClick = () => {
    inputWrapperRef.current!.style.boxShadow = `0px 0px 2px 1px #5A71E4`;
    inputWrapperRef.current!.style.borderColor = 'white';

    inputRef.current!.focus();
  };

  return (
    <StyledInputWrapper onClick={handleClick} ref={inputWrapperRef}>
      {icon && <StyledIcon src={icon} />}
      <StyledInput
        ref={inputRef}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder ? placeholder : ''}
      />
    </StyledInputWrapper>
  );
};

export default Input;
