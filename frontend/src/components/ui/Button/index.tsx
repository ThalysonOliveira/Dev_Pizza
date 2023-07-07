import { ButtonHTMLAttributes, ReactNode } from "react";
import { Btn, BtnText } from "./styles";
import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <Btn disabled={loading} {...rest}>
      {loading ? (
        <FaSpinner color="#FFF" size={16} />
      ) : (
        <BtnText>{children}</BtnText>
      )}
    </Btn>
  );
}
