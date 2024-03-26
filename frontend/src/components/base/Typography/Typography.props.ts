import { CSSProperties, HTMLAttributes } from "react";

import { Theme } from "types/Theme";

export type Variants =
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "title5"
  | "body"
  | "small"
  | "subtitle"
  | "mobile"
  | "tag"
  | "btn"
  | "crop";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  children: any;
  variant?: Variants;
  textColor?:
    | keyof Theme["neutral"]
    | keyof Theme["btn"]["text"]
    | keyof Theme["grey"]
    | keyof Theme["brand"]
    | keyof Theme["btn"]["color"];
  weight?: string;
  align?: "center" | "left" | "right";
  component?: string;
  style?: CSSProperties;
  className?: string;
  bgColor?: string;
}
