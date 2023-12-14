import { Button, Card, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Root = styled(Container)(({ theme }) => ({
  margin: "auto",
  marginTop: theme.spacing(5),
}));

export const Title = styled("div")(({ theme }) => ({
  fontSize: 24,
  padding: theme.spacing(1, 2),
  textAlign: "center",
}));

export const CustomCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0.5, 2),
}));
