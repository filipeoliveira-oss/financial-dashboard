import * as React from "react"

function ChevronSvg(props:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-left"
      {...props}
    >
      <path d="M15 18L9 12 15 6" />
    </svg>
  )
}

export default ChevronSvg
