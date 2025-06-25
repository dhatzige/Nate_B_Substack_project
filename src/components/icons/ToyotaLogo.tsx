import { SVGProps } from 'react';

export const ToyotaLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    role="img"
    aria-label="Toyota logo"
    {...props}
  >
    <path
      fill="currentColor"
      d="M500 250c-138 0-250 112-250 250s112 250 250 250 250-112 250-250-112-250-250-250zm0 415c-91 0-165-74-165-165S409 335 500 335s165 74 165 165-74 165-165 165zm0-250c-41 0-75-34-75-75s34-75 75-75 75 34 75 75-34 75-75 75z"
    ></path>
  </svg>
);
