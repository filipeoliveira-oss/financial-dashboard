import * as React from "react"

function LaptopSvg(props:any) {
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
    className="feather feather-hard-drive"
    {...props}
  >
    <path d="M22 12L2 12" />
    <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
    <path d="M6 16L6.01 16" />
    <path d="M10 16L10.01 16" />
  </svg>
  )
}

export default LaptopSvg
