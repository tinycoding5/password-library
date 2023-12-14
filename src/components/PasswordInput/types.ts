import { InputProps } from "@mui/material";
import { ReactNode } from "react";
import { PASSWORD_ERROR_HELPER_TEXTS } from "../PasswordRequirement/types";

export interface PasswordInputProps {
  id: string;
  name: string;
  label: ReactNode;  
  InputProps?: InputProps;
  disabled?: boolean;
  required?: boolean;
  PasswordRequirements?: ReactNode;
  watchField?: string;
  errorHelperTexts?: {
    [key in PASSWORD_ERROR_HELPER_TEXTS]: string;
  };
}
