import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "success" | "danger";
interface ButtoncontainerProps {
  variant: ButtonVariant;
}

const buttonVariant = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};
export const ButtonContainer = styled.button<ButtoncontainerProps>`
  width: 100px;
  height: 50px;

  ${(props) => css`background-color: ${props.theme.primary};`}
`;
