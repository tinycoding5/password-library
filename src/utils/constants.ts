import * as yup from "yup"
import {
  PASSWORD_ERROR_HELPER_TEXTS,
  PASSWORD_REQUIREMENTS_KEYS,
} from "../components/PasswordRequirement/types";

const AT_LEAST_A_UPPERCASE = /[A-Z]/;
const AT_LEAST_A_LOWERCASE = /[a-z]/;
const AT_LEASE_A_NUMBER = /\d/;
const AT_LEASE_A_SPECIAL_CHARACTER = /[!@#$%^&*]/;

export const newPasswordValidation = yup
  .string()
  .required()
  .min(6, PASSWORD_REQUIREMENTS_KEYS.LENGTH_REQUIREMENT)
  .matches(
    AT_LEAST_A_UPPERCASE,
    PASSWORD_REQUIREMENTS_KEYS.UPPERCASE_REQUIREMENT
  )
  .matches(
    AT_LEAST_A_LOWERCASE,
    PASSWORD_REQUIREMENTS_KEYS.LOWERCASE_REQUIREMENT
  )
  .matches(AT_LEASE_A_NUMBER, PASSWORD_REQUIREMENTS_KEYS.NUMBER_REQUIREMENT)
  .matches(
    AT_LEASE_A_SPECIAL_CHARACTER,
    PASSWORD_REQUIREMENTS_KEYS.SPECIAL_CHARACTER_REQUIREMENT
  );

export const formValidation = yup.object().shape({
  newPassword: newPasswordValidation,
  confirmPassword: yup
    .string()
    .required()
    .min(8, PASSWORD_REQUIREMENTS_KEYS.LENGTH_REQUIREMENT)
    .matches(
      AT_LEAST_A_UPPERCASE,
      PASSWORD_REQUIREMENTS_KEYS.UPPERCASE_REQUIREMENT
    )
    .matches(
      AT_LEAST_A_LOWERCASE,
      PASSWORD_REQUIREMENTS_KEYS.LOWERCASE_REQUIREMENT
    )
    .matches(AT_LEASE_A_NUMBER, PASSWORD_REQUIREMENTS_KEYS.NUMBER_REQUIREMENT)
    .matches(
      AT_LEASE_A_SPECIAL_CHARACTER,
      PASSWORD_REQUIREMENTS_KEYS.SPECIAL_CHARACTER_REQUIREMENT
    )
    .oneOf(
      [yup.ref("newPassword"), ""],
      PASSWORD_ERROR_HELPER_TEXTS.MUST_MATCH_REQUIREMENT
    ),
});
export const requirements = {
  LENGTH_REQUIREMENT: "Min length of 6 characters",
  UPPERCASE_REQUIREMENT: "One uppercase character",
  LOWERCASE_REQUIREMENT: "One lowercase character",
  NUMBER_REQUIREMENT: "One number",
  SPECIAL_CHARACTER_REQUIREMENT: "One special character",
};
