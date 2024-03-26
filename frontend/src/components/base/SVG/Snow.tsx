import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const Snow = (props: SVGProps): JSX.Element => {
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
      viewBox="0 0 180 152"
    >
      <g filter="url(#filter0_bdi_2282_18146)">
        <path
          fill="url(#paint0_radial_2282_18146)"
          fillOpacity="0.77"
          fillRule="evenodd"
          d="M45.89 118.398c-.232.005-.465.008-.698.008-17.348 0-31.412-14.064-31.412-31.412 0-11.773 6.477-22.033 16.062-27.412a53.41 53.41 0 01-.007-.86c0-28.72 23.283-52.003 52.004-52.003 24.774 0 45.502 17.323 50.731 40.518 18.956.797 34.079 16.416 34.079 35.568 0 19.661-15.938 35.6-35.6 35.6-.233 0-.465-.002-.697-.007v.005H45.89v-.005z"
          clipRule="evenodd"
        ></path>
      </g>
      <g
        style={{ mixBlendMode: "soft-light" }}
        filter="url(#filter1_di_2282_18146)"
      >
        <circle cx="45.191" cy="86.994" r="31.412" fill="#848484"></circle>
      </g>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M90.66 86.402L90.66 149.716"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M82.879 91.186l7.678 7.678 6.98-7.678M97.538 148.422l-7.678-7.679-6.98 7.679M87.07 103.053l3.49 3.49 3.49-3.49M93.348 137.256l-3.49-3.49-3.49 3.49"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M121.867 118.512L58.553 118.512"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M117.086 110.729l-7.678 7.678 7.678 6.98M59.847 125.389l7.678-7.679-7.678-6.98M105.217 114.918l-3.49 3.49 3.49 3.49M71.017 121.199l3.49-3.49-3.49-3.49"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M112.898 95.401L68.129 140.17"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M103.821 93.977v10.858l10.366-.493M73.808 144.232v-10.859l-10.366.494M98.936 104.445v4.936h4.936M79.393 133.766v-4.936h-4.936"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M112.874 140.744L68.104 95.975"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M114.299 131.67H103.44l.493 10.365M64.04 101.654h10.858l-.494-10.365M103.826 126.783H98.89v4.936M74.508 107.236h4.936V102.3"
      ></path>
      <defs>
        <filter
          id="filter0_bdi_2282_18146"
          width="178.492"
          height="137.31"
          x="0.969"
          y="0.313"
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
            result="effect1_backgroundBlur_2282_18146"
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
            in2="effect1_backgroundBlur_2282_18146"
            result="effect2_dropShadow_2282_18146"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_2282_18146"
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
            result="effect3_innerShadow_2282_18146"
          ></feBlend>
        </filter>
        <filter
          id="filter1_di_2282_18146"
          width="74.834"
          height="74.034"
          x="10.576"
          y="49.176"
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
            result="effect1_dropShadow_2282_18146"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2282_18146"
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
            result="effect2_innerShadow_2282_18146"
          ></feBlend>
        </filter>
        <radialGradient
          id="paint0_radial_2282_18146"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-1.026 87.8278 -100.22116 -1.17079 67.644 30.532)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#99CEFF"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Snow;
