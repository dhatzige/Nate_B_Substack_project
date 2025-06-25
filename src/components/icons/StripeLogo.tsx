import { SVGProps } from 'react';

export const StripeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    role="img"
    aria-label="Stripe logo"
    {...props}
  >
    <path
      fill="currentColor"
      d="M650 200c-138 0-250 112-250 250s112 250 250 250 250-112 250-250-112-250-250-250zm0 415c-91 0-165-74-165-165s74-165 165-165 165 74 165 165-74 165-165 165zm-450-215c0 138 112 250 250 250v-85c-91 0-165-74-165-165S309 285 400 285v-85c-138 0-250 112-250 250z"
    ></path>
  </svg>
);
