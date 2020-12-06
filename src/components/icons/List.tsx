import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgList(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M2.3 5.304c.3-.3.7-.4 1.1-.2.1 0 .2.1.3.2.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3h-.2c-.1-.1-.1-.1-.2-.1-.05 0-.075-.025-.1-.05-.025-.025-.05-.05-.1-.05l-.1-.1c-.05-.05-.075-.1-.1-.15-.025-.05-.05-.1-.1-.15-.1-.1-.1-.3-.1-.4 0-.1 0-.3.1-.4 0-.1.1-.2.2-.3zm5.7-.3c-.6 0-1 .4-1 1s.4 1 1 1h13c.6 0 1-.4 1-1s-.4-1-1-1H8zm0 6h13c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1zm13 6H8c-.6 0-1 .4-1 1s.4 1 1 1h13c.6 0 1-.4 1-1s-.4-1-1-1zm-17.1-5.4c0-.05-.025-.075-.05-.1-.025-.025-.05-.05-.05-.1 0-.1-.1-.1-.1-.1-.3-.3-.7-.4-1.1-.2-.05.05-.1.075-.15.1-.05.025-.1.05-.15.1l-.1.1c0 .05-.025.075-.05.1-.025.025-.05.05-.05.1 0 .043 0 .067-.008.089-.01.03-.034.053-.092.111v.2c0 .3.1.5.3.7.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7v-.2c0-.05-.025-.075-.05-.1-.025-.025-.05-.05-.05-.1zm-1.8 6c0-.1.1-.2.2-.3.4-.4 1-.4 1.4 0 .2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.1 0-.3.1-.4z"
        clipRule="evenodd"
      />
      <Mask id="list_svg__a" width={20} height={15} x={2} y={5} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M2.3 5.304c.3-.3.7-.4 1.1-.2.1 0 .2.1.3.2.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3h-.2c-.1-.1-.1-.1-.2-.1-.05 0-.075-.025-.1-.05-.025-.025-.05-.05-.1-.05l-.1-.1c-.05-.05-.075-.1-.1-.15-.025-.05-.05-.1-.1-.15-.1-.1-.1-.3-.1-.4 0-.1 0-.3.1-.4 0-.1.1-.2.2-.3zm5.7-.3c-.6 0-1 .4-1 1s.4 1 1 1h13c.6 0 1-.4 1-1s-.4-1-1-1H8zm0 6h13c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1zm13 6H8c-.6 0-1 .4-1 1s.4 1 1 1h13c.6 0 1-.4 1-1s-.4-1-1-1zm-17.1-5.4c0-.05-.025-.075-.05-.1-.025-.025-.05-.05-.05-.1 0-.1-.1-.1-.1-.1-.3-.3-.7-.4-1.1-.2-.05.05-.1.075-.15.1-.05.025-.1.05-.15.1l-.1.1c0 .05-.025.075-.05.1-.025.025-.05.05-.05.1 0 .043 0 .067-.008.089-.01.03-.034.053-.092.111v.2c0 .3.1.5.3.7.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7v-.2c0-.05-.025-.075-.05-.1-.025-.025-.05-.05-.05-.1zm-1.8 6c0-.1.1-.2.2-.3.4-.4 1-.4 1.4 0 .2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.1 0-.3.1-.4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#list_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgList;
