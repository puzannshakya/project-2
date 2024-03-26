import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const Overcast = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      fill="none"
      viewBox="0 0 179 139"
    >
      <g filter="url(#filter0_bdi_2199_18186)">
        <path
          fill="url(#paint0_radial_2199_18186)"
          fillOpacity="0.77"
          fillRule="evenodd"
          d="M45.075 118.914a32.37 32.37 0 01-.697.007c-17.349 0-31.412-14.063-31.412-31.411 0-11.773 6.477-22.034 16.061-27.413a53.398 53.398 0 01-.007-.859c0-28.72 23.283-52.004 52.004-52.004 24.775 0 45.503 17.324 50.732 40.519 18.955.796 34.079 16.416 34.079 35.568 0 19.661-15.939 35.6-35.6 35.6-.233 0-.465-.003-.697-.007v.005H45.075v-.005z"
          clipRule="evenodd"
        ></path>
      </g>
      <g
        style={{ mixBlendMode: "soft-light" }}
        filter="url(#filter1_di_2199_18186)"
      >
        <circle cx="44.377" cy="87.509" r="31.412" fill="#848484"></circle>
      </g>
      <defs>
        <filter
          id="filter0_bdi_2199_18186"
          width="178.492"
          height="137.31"
          x="0.154"
          y="0.829"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="3.203"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2199_18186"
          ></feComposite>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="6.406"></feOffset>
          <feGaussianBlur stdDeviation="6.406"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.2015 0 0 0 0 0.3875 0 0 0 0.2 0"></feColorMatrix>
          <feBlend
            in2="effect1_backgroundBlur_2199_18186"
            result="effect2_dropShadow_2199_18186"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_2199_18186"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="0.4" dy="0.801"></feOffset>
          <feGaussianBlur stdDeviation="2.803"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect3_innerShadow_2199_18186"
          ></feBlend>
        </filter>
        <filter
          id="filter1_di_2199_18186"
          width="74.834"
          height="74.034"
          x="9.762"
          y="49.692"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-0.801" dy="-4.004"></feOffset>
          <feGaussianBlur stdDeviation="1.201"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2199_18186"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2199_18186"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="8.808" dy="4.804"></feOffset>
          <feGaussianBlur stdDeviation="4.404"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect2_innerShadow_2199_18186"
          ></feBlend>
        </filter>
        <radialGradient
          id="paint0_radial_2199_18186"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-1.026 87.8278 -100.22116 -1.17079 66.829 31.048)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#99CEFF"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Overcast;
