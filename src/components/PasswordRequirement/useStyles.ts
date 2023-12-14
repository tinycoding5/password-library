import { styled } from "@mui/material/styles";

export const SuccessLi = styled("li")(({ theme }) => ({
  color: theme.palette.success.main,
  fontSize: 12,
}));

export const CustomLi = styled("li", {
  shouldForwardProp: (prop) => prop !== "notSatisfied",
})<{ notSatisfied?: boolean }>(({ theme, notSatisfied }) => ({
  color: notSatisfied ? theme.palette.error.main : "inherit",
  fontSize: 12,
}));

export const Wrapper = styled("ul")(() => ({
  listStyle: "none",
  margin: 0,
  padding: 0,
  textAlign: "left",
}));
