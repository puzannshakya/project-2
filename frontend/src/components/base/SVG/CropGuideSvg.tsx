import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const CropGuideSvg = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, stroke } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "18"}
      height={height || "22"}
      viewBox="0 0 18 22"
      fill="none"
    >
      <path
        d="M16.898 15H4.898C3.968 15 3.503 15 3.121 15.102C2.61231 15.2384 2.14849 15.5063 1.77618 15.8788C1.40386 16.2513 1.13616 16.7152 1 17.224"
        stroke={stroke || theme.btn.text.secondary}
        stroke-width="1.5"
      />
      <path
        d="M5 6H13M5 9.5H10M7 21C4.172 21 2.757 21 1.879 20.121C1 19.243 1 17.828 1 15V7C1 4.172 1 2.757 1.879 1.879C2.757 1 4.172 1 7 1H11C13.828 1 15.243 1 16.121 1.879C17 2.757 17 4.172 17 7M11 21C13.828 21 15.243 21 16.121 20.121C17 19.243 17 17.828 17 15V11"
        stroke={stroke || theme.btn.text.secondary}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CropGuideSvg;
