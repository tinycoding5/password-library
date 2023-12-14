import { Control, FieldErrors } from "react-hook-form";
import { StringSchema } from "yup";
import { IFormInput } from "../../pages/PasswordForm";

export const PASSWORD_REQUIREMENTS_KEYS = {
  LENGTH_REQUIREMENT: "LENGTH_REQUIREMENT",
  UPPERCASE_REQUIREMENT: "UPPERCASE_REQUIREMENT",
  LOWERCASE_REQUIREMENT: "LOWERCASE_REQUIREMENT",
  NUMBER_REQUIREMENT: "NUMBER_REQUIREMENT",
  SPECIAL_CHARACTER_REQUIREMENT: "SPECIAL_CHARACTER_REQUIREMENT",
};

export enum PASSWORD_ERROR_HELPER_TEXTS {
  MUST_MATCH_REQUIREMENT = "MUST_MATCH_REQUIREMENT",
}

export interface RequirementTextsProps {
  LENGTH_REQUIREMENT: string;
  UPPERCASE_REQUIREMENT: string;
  LOWERCASE_REQUIREMENT: string;
  NUMBER_REQUIREMENT: string;
  SPECIAL_CHARACTER_REQUIREMENT: string;
}

export interface RequirementValidation {
  LENGTH_REQUIREMENT: boolean;
  UPPERCASE_REQUIREMENT: boolean;
  LOWERCASE_REQUIREMENT: boolean;
  NUMBER_REQUIREMENT: boolean;
  SPECIAL_CHARACTER_REQUIREMENT: boolean;
}

export interface PasswordRequirementProps {
  fieldName: string;
  requirementTexts: RequirementTextsProps;
  yupValidationSchema: StringSchema;
  control?: Control<IFormInput, any>;
  errors?: FieldErrors<IFormInput>;
}

export interface RequirementProps {
  text: string;
  condition: boolean;
  showNotSatisfied?: boolean;
}
