import * as React from "react"

function CheckSvg(props:any) {
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
      className="feather feather-check"
      {...props}
    >
      <path d="M20 6L9 17 4 12" />
    </svg>
  )
}

export default CheckSvg
