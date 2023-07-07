import { InputHTMLAttributes } from "react";
import { InputField } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

export function Input({ ...rest }: InputProps) {
  return <InputField type="text" {...rest} />;
}

export function TextArea({ ...rest }: TextAreaProps) {
  return <textarea {...rest}></textarea>;
}
