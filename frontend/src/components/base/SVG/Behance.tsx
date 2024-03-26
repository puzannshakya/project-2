import React, { useState } from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const Behance = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fillColor = isHovered ? "#FF4D03" : "#FA8029";

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 16 16"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <g clipPath="url(#clip0_3621_28104)">
        <path
          fill={fillColor}
          d="M12 7.63c.123.185.246.37.308.678h-1.97c0-.062 0-.185.062-.308.061-.123.061-.185.185-.308.061-.123.184-.184.307-.246a1.16 1.16 0 01.493-.123c.246.062.492.123.615.308zM6.338 7.2a.78.78 0 00.247-.554c0-.123 0-.246-.062-.37-.061-.06-.123-.184-.185-.184-.061-.061-.184-.061-.307-.123h-1.6v1.416h1.354c.184 0 .369-.062.553-.185zm-.492 1.046H4.431v1.662h1.415c.123 0 .246 0 .37-.062a.47.47 0 00.307-.123c.062-.061.185-.123.246-.246.062-.123.062-.246.062-.37 0-.307-.062-.553-.246-.676-.185-.123-.431-.185-.739-.185zM16 3.016v9.969A3.02 3.02 0 0112.985 16h-9.97A3.02 3.02 0 010 12.985v-9.97A3.02 3.02 0 013.015 0h9.97A3.02 3.02 0 0116 3.015zm-5.908 2.892h2.462v-.616h-2.462v.616zM8.123 9.23c0-.37-.061-.677-.246-.985-.185-.246-.43-.43-.8-.554.246-.123.492-.307.615-.492s.185-.43.185-.738-.062-.493-.123-.739c-.123-.185-.246-.37-.37-.43-.184-.124-.369-.185-.615-.247-.307-.123-.554-.123-.861-.123H3.077v6.03H6.03c.246 0 .554-.06.8-.122s.492-.185.677-.308c.184-.123.369-.308.492-.554.062-.184.123-.43.123-.738zm2.216-.185h3.138c0-.37 0-.677-.062-.984-.061-.308-.184-.616-.369-.8a1.924 1.924 0 00-.677-.554c-.307-.123-.615-.246-.984-.246a2.47 2.47 0 00-.924.184c-.246.123-.492.308-.738.492-.185.185-.37.431-.43.739a2.47 2.47 0 00-.185.923c0 .308.061.677.184.923.123.308.246.554.431.738.185.185.43.37.677.493.308.123.615.184.923.184.492 0 .923-.123 1.292-.369.37-.246.616-.615.8-1.107H12.37c-.061.123-.123.246-.307.369a1.04 1.04 0 01-.616.184c-.307 0-.615-.061-.8-.246a1.511 1.511 0 01-.308-.923z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3621_28104">
          <rect width="16" height="16" fill="#fff" rx="3"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Behance;