import * as React from "react"

function SunSvg(props:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-sun"
      {...props}
    >
      <circle cx={12} cy={12} r={5} />
      <path d="M12 1L12 3" />
      <path d="M12 21L12 23" />
      <path d="M4.22 4.22L5.64 5.64" />
      <path d="M18.36 18.36L19.78 19.78" />
      <path d="M1 12L3 12" />
      <path d="M21 12L23 12" />
      <path d="M4.22 19.78L5.64 18.36" />
      <path d="M18.36 5.64L19.78 4.22" />
    </svg>
  )
}

export default SunSvg
