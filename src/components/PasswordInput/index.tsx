import React from "react";
import { Box, FormControl, useTheme } from "@mui/material";
import { PasswordInputProps } from "./types";
import {
  CustomIconButton,
  CustomInput,
  CustomInputAdornment,
  CustomLabel,
  HelperText,
} from "./useStyles";
import { useFormContext, useWatch } from "react-hook-form";
import {
  CheckCircleOutlineOutlined,
  ErrorOutlineOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

const PasswordInput = ({
  id,
  name,
  label,
  InputProps,
  disabled = false,
  required = false,
  PasswordRequirements,
  errorHelperTexts,
}: PasswordInputProps) => {
  const [isShowingPassword, setIsShowingPassword] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string>();

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const value = useWatch({
    control,
    name: name,
  });

  const handleClickShowPassword = () => {
    setIsShowingPassword((visible) => !visible);
  };

  const hasError = Boolean(errors[name]);
  const isValid = !errors[name] && value;
  const theme = useTheme();

  React.useEffect(() => {
    if (name && value && errorHelperTexts) {
      const error = errors[name];
      if (error?.message) {
        // @ts-ignore
        const message = errorHelperTexts[error?.message];
        setErrorMessage(message);
      }
    }
  }, [value, name, errors, errorHelperTexts]);

  return (
    <FormControl fullWidth sx={{ margin: theme.spacing(2, 0) }}>
      <CustomLabel
        htmlFor={id}
        shrink
        success={isValid}
        disabled={disabled}
        required={required}
        error={hasError}
      >
        {label}
      </CustomLabel>
      <CustomInput
        id={id}
        {...register(name)}
        type={isShowingPassword ? "text" : "password"}
        disableUnderline
        disabled={disabled}
        required={required}
        error={hasError}
        {...InputProps}
        endAdornment={
          <CustomInputAdornment position="end">
            <CustomIconButton
              aria-label="toggle password visiblity"
              onClick={handleClickShowPassword}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
            >
              {isShowingPassword ? (
                <VisibilityOutlined />
              ) : (
                <VisibilityOffOutlined />
              )}

              {hasError && (
                <ErrorOutlineOutlined
                  color="error"
                  sx={{ marginLeft: theme.spacing(1) }}
                />
              )}
              {isValid && (
                <CheckCircleOutlineOutlined
                  htmlColor={theme.palette.success.main}
                  sx={{ marginLeft: theme.spacing(1) }}
                />
              )}
            </CustomIconButton>
          </CustomInputAdornment>
        }
      />
      <HelperText error={hasError}>{errorMessage}</HelperText>
      {PasswordRequirements && <Box marginTop={1}>{PasswordRequirements}</Box>}
    </FormControl>
  );
};

export default PasswordInput;
