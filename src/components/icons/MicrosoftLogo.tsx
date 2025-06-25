import { SVGProps } from 'react';

export const MicrosoftLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    role="img"
    aria-label="Microsoft logo"
    {...props}
  >
    <path fill="#f25022" d="M0 0h488v488H0z"></path>
    <path fill="#7fba00" d="M512 0h488v488H512z"></path>
    <path fill="#00a4ef" d="M0 512h488v488H0z"></path>
    <path fill="#ffb900" d="M512 512h488v488H512z"></path>
  </svg>
);
