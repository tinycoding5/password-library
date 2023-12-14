import React from "react";
import {
  PASSWORD_REQUIREMENTS_KEYS,
  PasswordRequirementProps,
  RequirementValidation,
} from "./types";
import { useWatch, useFormContext } from "react-hook-form";
import { Wrapper } from "./useStyles";
import { Grid } from "@mui/material";
import Requirement from "./Requirement";

const PasswordRequirement = ({
  fieldName,
  requirementTexts,
  yupValidationSchema,
}: PasswordRequirementProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const value = useWatch({
    control,
    name: fieldName,
  });

  const [validation, setValidation] = React.useState<RequirementValidation>({
    LENGTH_REQUIREMENT: false,
    UPPERCASE_REQUIREMENT: false,
    LOWERCASE_REQUIREMENT: false,
    NUMBER_REQUIREMENT: false,
    SPECIAL_CHARACTER_REQUIREMENT: false,
  });

  const hasError = Boolean(errors[fieldName]);

  React.useEffect(() => {
    (async () => {
      if (!value) {
        setValidation({
          LENGTH_REQUIREMENT: false,
          UPPERCASE_REQUIREMENT: false,
          LOWERCASE_REQUIREMENT: false,
          NUMBER_REQUIREMENT: false,
          SPECIAL_CHARACTER_REQUIREMENT: false,
        });

        return;
      }

      let errorCodes = [];
      try {
        await yupValidationSchema.validate(value, {
          abortEarly: false,
        });
      } catch (error: any) {
        errorCodes = error?.errors || [];
      } finally {
        setValidation({
          LENGTH_REQUIREMENT:
            errorCodes.indexOf(
              PASSWORD_REQUIREMENTS_KEYS.LENGTH_REQUIREMENT
            ) === -1,
          UPPERCASE_REQUIREMENT:
            errorCodes.indexOf(
              PASSWORD_REQUIREMENTS_KEYS.UPPERCASE_REQUIREMENT
            ) === -1,
          LOWERCASE_REQUIREMENT:
            errorCodes.indexOf(
              PASSWORD_REQUIREMENTS_KEYS.LOWERCASE_REQUIREMENT
            ) === -1,
          NUMBER_REQUIREMENT:
            errorCodes.indexOf(
              PASSWORD_REQUIREMENTS_KEYS.NUMBER_REQUIREMENT
            ) === -1,
          SPECIAL_CHARACTER_REQUIREMENT:
            errorCodes.indexOf(
              PASSWORD_REQUIREMENTS_KEYS.SPECIAL_CHARACTER_REQUIREMENT
            ) === -1,
        });
      }
    })();
  }, [value, yupValidationSchema]);

  return (
    <Wrapper>
      <Grid container justifyContent="flex-start" spacing={1}>
        <Grid item md={6} xs={12}>
          <Requirement
            text={requirementTexts.LENGTH_REQUIREMENT}
            condition={validation.LENGTH_REQUIREMENT}
            showNotSatisfied={hasError}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Requirement
            text={requirementTexts.UPPERCASE_REQUIREMENT}
            condition={validation.UPPERCASE_REQUIREMENT}
            showNotSatisfied={hasError}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Requirement
            text={requirementTexts.LOWERCASE_REQUIREMENT}
            condition={validation.LOWERCASE_REQUIREMENT}
            showNotSatisfied={hasError}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Requirement
            text={requirementTexts.NUMBER_REQUIREMENT}
            condition={validation.NUMBER_REQUIREMENT}
            showNotSatisfied={hasError}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Requirement
            text={requirementTexts.SPECIAL_CHARACTER_REQUIREMENT}
            condition={validation.SPECIAL_CHARACTER_REQUIREMENT}
            showNotSatisfied={hasError}
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default PasswordRequirement;
