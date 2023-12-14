import React from "react";
import { CustomButton, CustomCard, Root, Title } from "./useStyles";
import PasswordInput from "../../components/PasswordInput";
import PasswordRequirement from "../../components/PasswordRequirement";
import {
  formValidation,
  newPasswordValidation,
  requirements,
} from "../../utils/constants";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CardActions } from "@mui/material";

export interface IFormInput {
  newPassword: string;
  confirmPassword: string;
}

const PasswordForm = () => {
  const methods = useForm<IFormInput>({
    resolver: yupResolver(formValidation, { abortEarly: false }),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("data: ", data);
    alert("Your password created successfully!");
  };

  return (
    <Root maxWidth="md">
      <Title>Create Password</Title>
      <CustomCard>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <PasswordInput
              label="New Password"
              id="newPassword"
              name="newPassword"
              required={true}
              PasswordRequirements={
                <PasswordRequirement
                  yupValidationSchema={newPasswordValidation}
                  fieldName="newPassword"
                  requirementTexts={requirements}
                  errors={methods.formState.errors}
                />
              }
            />
            <PasswordInput
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              required={true}
              watchField="newPassword"
              errorHelperTexts={{
                MUST_MATCH_REQUIREMENT: "Passwords do not match.",
              }}
            />
            <CardActions>
              <CustomButton type="submit" variant="contained">
                Save
              </CustomButton>
            </CardActions>
          </form>
        </FormProvider>
      </CustomCard>
    </Root>
  );
};

export default PasswordForm;
