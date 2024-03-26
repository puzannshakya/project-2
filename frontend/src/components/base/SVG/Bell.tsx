import React from 'react';

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from './SVG.props';

const Bell = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={19}
      fill="none"
      {...props}
    >
      <path
        fill="#5B5B60"
        fillRule="evenodd"
        d="M12 17a2 2 0 0 1-1.85 1.995L10 19H8a2 2 0 0 1-1.994-1.85L6 17h6ZM9 0a7 7 0 0 1 6.997 6.76L16 7v3.764l1.822 3.644a1.1 1.1 0 0 1-.87 1.586L16.84 16H1.163a1.1 1.1 0 0 1-1.03-1.487l.046-.105L2 10.764V7a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-4.994 4.783L4 7v3.764a2 2 0 0 1-.136.725l-.075.17L2.62 14h12.763l-1.17-2.342a2.002 2.002 0 0 1-.203-.709l-.01-.185V7a5 5 0 0 0-5-5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Bell;
