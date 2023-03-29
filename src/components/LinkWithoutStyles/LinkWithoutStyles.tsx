import { ReactNode } from "react";
import { StyledLink } from "./style";

interface IProps {
  to: string;
  children: ReactNode;
}

export const LinkWithoutStyles = ({ to, children }: IProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
