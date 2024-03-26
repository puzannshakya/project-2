import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const ArrowDown = (props: SVGProps): JSX.Element => {
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
        d="M20.2969 9.79586L12.7969 17.2959C12.6924 17.4007 12.5682 17.484 12.4314 17.5407C12.2947 17.5975 12.1481 17.6267 12 17.6267C11.8519 17.6267 11.7053 17.5975 11.5686 17.5407C11.4318 17.484 11.3076 17.4007 11.2031 17.2959L3.70312 9.79586C3.49178 9.58451 3.37305 9.29787 3.37305 8.99898C3.37305 8.7001 3.49178 8.41345 3.70312 8.20211C3.91447 7.99076 4.20111 7.87203 4.5 7.87203C4.79888 7.87203 5.08553 7.99076 5.29687 8.20211L12.0009 14.9062L18.705 8.20117C18.9163 7.98983 19.203 7.87109 19.5019 7.87109C19.8008 7.87109 20.0874 7.98983 20.2987 8.20117C20.5101 8.41252 20.6288 8.69916 20.6288 8.99805C20.6288 9.29693 20.5101 9.58358 20.2987 9.79492L20.2969 9.79586Z"
        fill={fill || "#16161D"}
      />
    </svg>
  );
};

export default ArrowDown;
