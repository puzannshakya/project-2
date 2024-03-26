import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const ArrowUp = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.70313 14.2041L11.2031 6.70414C11.3076 6.59926 11.4318 6.51605 11.5686 6.45926C11.7053 6.40248 11.8519 6.37325 12 6.37325C12.1481 6.37325 12.2947 6.40248 12.4314 6.45926C12.5682 6.51605 12.6924 6.59926 12.7969 6.70414L20.2969 14.2041C20.5082 14.4155 20.627 14.7021 20.627 15.001C20.627 15.2999 20.5082 15.5865 20.2969 15.7979C20.0855 16.0092 19.7989 16.128 19.5 16.128C19.2011 16.128 18.9145 16.0092 18.7031 15.7979L11.9991 9.09383L5.295 15.7988C5.08366 16.0102 4.79701 16.1289 4.49813 16.1289C4.19924 16.1289 3.9126 16.0102 3.70125 15.7988C3.48991 15.5875 3.37117 15.3008 3.37117 15.002C3.37117 14.7031 3.48991 14.4164 3.70125 14.2051L3.70313 14.2041Z"
        fill={fill || "#16161D"}
      />
    </svg>
  );
};

export default ArrowUp;
