import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgGift(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.337 6A3.5 3.5 0 007.5 8H3v3h1a1 1 0 00-1 1v1H2a1 1 0 01-1-1V7a1 1 0 011-1h2.337zM5 13v-1a1 1 0 00-1-1h7v2H5zm6 8v-8h2v8h-2zm1 2H4a1 1 0 01-1-1v-9h2v8h6v1a1 1 0 001 1zm9-10v9a1 1 0 01-1 1h-8a1 1 0 001-1v-1h6v-8h2zm-1-2a1 1 0 00-1 1v1h-6v-2h7zm-.337-5H22a1 1 0 011 1v5a1 1 0 01-1 1h-1v-1a1 1 0 00-1-1h1V8h-4.5a3.5 3.5 0 003.163-2zM16.5 6h3.163A3.5 3.5 0 0016.5 1c-1.96 0-3.421 1.168-4.439 3.018L12 4.131a9.815 9.815 0 00-.061-.113C10.92 2.168 9.46 1 7.5 1a3.5 3.5 0 00-3.163 5H7.5a1.5 1.5 0 110-3c1.102 0 1.985.707 2.686 1.982.179.324.335.668.468 1.018h.578c-.104.334-.171.603-.208.78a1.01 1.01 0 00-.024.248V11h2V7.028a1.004 1.004 0 00-.024-.248 8.785 8.785 0 00-.208-.78h.578c.133-.35.29-.694.468-1.018C14.515 3.707 15.398 3 16.5 3a1.5 1.5 0 010 3zM12 6a1 1 0 01.976.78l.005.024A1.05 1.05 0 0113 7v.028a1 1 0 01-2 0V7a1.007 1.007 0 01.02-.196l.004-.024A1 1 0 0112 6zm0 0h.768A10.665 10.665 0 0012 4.131 10.665 10.665 0 0011.232 6H12z"
        clipRule="evenodd"
      />
      <Mask id="gift_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.337 6A3.5 3.5 0 007.5 8H3v3h1a1 1 0 00-1 1v1H2a1 1 0 01-1-1V7a1 1 0 011-1h2.337zM5 13v-1a1 1 0 00-1-1h7v2H5zm6 8v-8h2v8h-2zm1 2H4a1 1 0 01-1-1v-9h2v8h6v1a1 1 0 001 1zm9-10v9a1 1 0 01-1 1h-8a1 1 0 001-1v-1h6v-8h2zm-1-2a1 1 0 00-1 1v1h-6v-2h7zm-.337-5H22a1 1 0 011 1v5a1 1 0 01-1 1h-1v-1a1 1 0 00-1-1h1V8h-4.5a3.5 3.5 0 003.163-2zM16.5 6h3.163A3.5 3.5 0 0016.5 1c-1.96 0-3.421 1.168-4.439 3.018L12 4.131a9.815 9.815 0 00-.061-.113C10.92 2.168 9.46 1 7.5 1a3.5 3.5 0 00-3.163 5H7.5a1.5 1.5 0 110-3c1.102 0 1.985.707 2.686 1.982.179.324.335.668.468 1.018h.578c-.104.334-.171.603-.208.78a1.01 1.01 0 00-.024.248V11h2V7.028a1.004 1.004 0 00-.024-.248 8.785 8.785 0 00-.208-.78h.578c.133-.35.29-.694.468-1.018C14.515 3.707 15.398 3 16.5 3a1.5 1.5 0 010 3zM12 6a1 1 0 01.976.78l.005.024A1.05 1.05 0 0113 7v.028a1 1 0 01-2 0V7a1.007 1.007 0 01.02-.196l.004-.024A1 1 0 0112 6zm0 0h.768A10.665 10.665 0 0012 4.131 10.665 10.665 0 0011.232 6H12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#gift_svg__a)">
        <Path fill="currentColor" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgGift;
