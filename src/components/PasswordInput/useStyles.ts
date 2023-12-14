import {
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomLabel = styled(InputLabel, {
  shouldForwardProp: (prop) => prop !== "success",
})<{ success?: boolean }>(({ theme, success }) => ({
  color: success ? theme.palette.success.main : "inherit",
  shrink: {
    transform: "translate(0, 1.5px) scale(0.85)",
  },
  fontSize: 20,
}));

export const CustomInput = styled(Input, {
  shouldForwardProp: (prop) => prop !== "success",
})<{ success?: boolean }>(({ theme, success }) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    outline: `1px solid ${theme.palette.black.main}`,
    borderRadius: 4,
    padding: theme.spacing(0.5, 2),
  },
  input: {
    padding: theme.spacing(1),
    borderRadius: 4,
  },
  disabled: {
    color: theme.palette.black.dark,
    backgroundColor: theme.palette.black.light,
  },
  focused: {
    outline: `1px solid ${theme.palette.primary.main}`,
  },
  error: {
    outline: `1px solid ${theme.palette.error.main}`,
  },
  outline: success
    ? `1px solid ${theme.palette.success.main}`
    : `1px solid ${theme.palette.black.main}`,
  padding: theme.spacing(0, 1.25),
  borderRadius: 4,
}));

export const CustomInputAdornment = styled(InputAdornment)(() => ({
  root: {
    fontSize: "0.85rem",
  },
}));

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.black.main,
}));

export const HelperText = styled(FormHelperText)(() => ({
  root: {
    fontSize: "0.85rem",
  },
}));
