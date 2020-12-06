import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgPhone(props: SvgProps) {
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
        d="M17.776 13.356c.804.302 1.708.502 2.612.603 1.507.2 2.612 1.507 2.612 3.014v3.013c0 .804-.402 1.507-.904 2.11S20.79 23 19.986 23h-.301c-3.215-.301-6.43-1.406-9.142-3.215a21.124 21.124 0 01-6.328-6.328C2.507 10.744 1.3 7.53 1 4.315c0-.804.2-1.607.703-2.21A3.104 3.104 0 013.713 1H7.026c1.507 0 2.813 1.105 3.014 2.612.1.904.301 1.808.603 2.612.402 1.105.1 2.41-.703 3.214l-.704.704c1.206 1.908 2.813 3.415 4.621 4.62l.704-.703c.904-.803 2.11-1.105 3.214-.703zm3.215 6.63v-3.013c0-.503-.402-.904-.804-1.005-1.004-.2-2.009-.402-3.014-.804-.401-.2-.803-.1-1.104.201l-1.306 1.306c-.302.402-.804.402-1.206.201a16.482 16.482 0 01-6.43-6.43c-.2-.4-.1-.903.202-1.205l1.306-1.205c.2-.301.301-.703.2-1.105a10.286 10.286 0 01-.803-3.014c-.1-.502-.502-.904-1.005-.904H4.014c-.302 0-.603.201-.804.402-.1.2-.2.402-.2.703.3 2.913 1.305 5.726 2.912 8.238 1.507 2.31 3.416 4.32 5.726 5.726 2.512 1.607 5.325 2.611 8.238 2.913.402 0 .603-.1.803-.302.201-.2.302-.401.302-.703z"
        clipRule="evenodd"
      />
      <Mask id="phone_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M17.776 13.356c.804.302 1.708.502 2.612.603 1.507.2 2.612 1.507 2.612 3.014v3.013c0 .804-.402 1.507-.904 2.11S20.79 23 19.986 23h-.301c-3.215-.301-6.43-1.406-9.142-3.215a21.124 21.124 0 01-6.328-6.328C2.507 10.744 1.3 7.53 1 4.315c0-.804.2-1.607.703-2.21A3.104 3.104 0 013.713 1H7.026c1.507 0 2.813 1.105 3.014 2.612.1.904.301 1.808.603 2.612.402 1.105.1 2.41-.703 3.214l-.704.704c1.206 1.908 2.813 3.415 4.621 4.62l.704-.703c.904-.803 2.11-1.105 3.214-.703zm3.215 6.63v-3.013c0-.503-.402-.904-.804-1.005-1.004-.2-2.009-.402-3.014-.804-.401-.2-.803-.1-1.104.201l-1.306 1.306c-.302.402-.804.402-1.206.201a16.482 16.482 0 01-6.43-6.43c-.2-.4-.1-.903.202-1.205l1.306-1.205c.2-.301.301-.703.2-1.105a10.286 10.286 0 01-.803-3.014c-.1-.502-.502-.904-1.005-.904H4.014c-.302 0-.603.201-.804.402-.1.2-.2.402-.2.703.3 2.913 1.305 5.726 2.912 8.238 1.507 2.31 3.416 4.32 5.726 5.726 2.512 1.607 5.325 2.611 8.238 2.913.402 0 .603-.1.803-.302.201-.2.302-.401.302-.703z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#phone_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgPhone;
