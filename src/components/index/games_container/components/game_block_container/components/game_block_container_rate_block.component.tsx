import { useState } from "react";

//region: Game Block Container Rate Block
export function GameBlockContainerRateBlock() {
  const [activated, setActivated] = useState<boolean>(false);
  return (
    <div className="col-start-1 row-start-1 flex justify-end items-start transparent w-full h-full">
      <button
        className="rounded-none pb-[19px] pl-[18px] pt-0.5 pr-0.5 -mr-[0.5px] bg-[url('/svg/favorite-mask.svg')] bg-cover bg-no-repeat"
        onClick={() => setActivated(!activated)}
      >
        {activated ? <FilledStar /> : <OutlineStar />}
      </button>
    </div>
  );
}

/***
 *
 *
 * SPACE
 *
 *
 */

//region: Filled Star
function FilledStar() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-secondary w-[16px] h-[16px]"
    >
      <path
        d="M9.60326 1.43808C9.97008 0.694835 11.0299 0.694834 11.3967 1.43808L13.794 6.29555C13.9397 6.59069 14.2213 6.79526 14.547 6.84259L19.9075 7.62152C20.7277 7.74071 21.0552 8.74868 20.4617 9.32722L16.5828 13.1082C16.3471 13.338 16.2396 13.669 16.2952 13.9934L17.2109 19.3322C17.351 20.1491 16.4936 20.7721 15.76 20.3864L10.9653 17.8657C10.674 17.7126 10.326 17.7126 10.0347 17.8657L5.24005 20.3864C4.50642 20.7721 3.64899 20.1491 3.7891 19.3322L4.70479 13.9934C4.76043 13.669 4.65288 13.338 4.41719 13.1082L0.538273 9.32722C-0.0552442 8.74868 0.272265 7.74071 1.09249 7.62152L6.45302 6.84259C6.77873 6.79526 7.0603 6.59069 7.20596 6.29555L9.60326 1.43808Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

/*
 *
 *
 * SPACE
 *
 *
 */

//region: Outline Star
function OutlineStar() {
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
    >
      <g clipPath="url(#clip0_1_112)">
        <g clipPath="url(#clip1_1_112)">
          <g clipPath="url(#clip2_1_112)">
            <path
              d="M11.9213 13.0669L11.2549 9.25355L14.0872 6.56334L10.1812 6.00174L8.43185 2.54161L6.68249 6.00174L2.77651 6.56334L5.60881 9.25355L4.93313 13.0669L8.43185 11.2644L11.9213 13.0669ZM15.6144 5.60319C15.96 5.65754 16.1327 5.79643 16.1327 6.01986C16.1327 6.15271 16.0525 6.29764 15.8921 6.45464L12.5322 9.66116L13.3282 14.1901C13.3344 14.2324 13.3375 14.2928 13.3375 14.3713C13.3375 14.6732 13.211 14.8242 12.958 14.8242C12.8407 14.8242 12.7173 14.788 12.5877 14.7155L8.43185 12.5778L4.27596 14.7155C4.14021 14.788 4.01679 14.8242 3.90572 14.8242C3.77614 14.8242 3.67896 14.7804 3.61416 14.6928C3.54937 14.6053 3.51698 14.4981 3.51698 14.3713C3.51698 14.3351 3.52315 14.2747 3.53549 14.1901L4.33149 9.66116L0.962354 6.45464C0.808089 6.2916 0.730957 6.14667 0.730957 6.01986C0.730957 5.79643 0.903733 5.65754 1.24929 5.60319L5.89574 4.94196L7.97831 0.820595C8.09555 0.573011 8.24673 0.449219 8.43185 0.449219C8.61697 0.449219 8.76815 0.573011 8.88539 0.820595L10.968 4.94196L15.6144 5.60319Z"
              fill="white"
            ></path>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_112">
          <rect
            width="15.4018"
            height="14.375"
            fill="white"
            transform="translate(0.730957 0.445312)"
          ></rect>
        </clipPath>
        <clipPath id="clip1_1_112">
          <rect
            width="15.4018"
            height="14.375"
            fill="white"
            transform="translate(0.730957 0.445312)"
          ></rect>
        </clipPath>
        <clipPath id="clip2_1_112">
          <rect
            width="15.4018"
            height="14.375"
            fill="white"
            transform="translate(0.730957 0.445312)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
}
