import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from '../types'

export default function FirstLook({
  height = 20,
  width = 89,
}: Props): ReactElement {
  return (
    <svg
      data-testid="svg-first-look"
      height={height}
      width={width}
      viewBox="0 0 89 20"
    >
      <g fill="none" fillRule="evenodd">
        <rect width="89" height="20" fill={'#f6a31c'} rx="4" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          stroke="#FFF"
          strokeWidth=".5"
          d="M7.93945312,15 L7.93945312,10.8984375 L11.7060547,10.8984375 L11.7060547,9.51074219 L7.93945312,9.51074219 L7.93945312,6.38671875 L11.9589844,6.38671875 L11.9589844,5.00585938 L6.31933594,5.00585938 L6.31933594,15 L7.93945312,15 Z M15.4042969,15 L15.4042969,5.00585938 L13.7705078,5.00585938 L13.7705078,15 L15.4042969,15 Z M19.6767578,15 L19.6767578,11.0078125 L21.2900391,11.0078125 L23.6826172,15 L25.5419922,15 L22.71875,10.5771484 C24.0130208,10.0485026 24.6601562,9.16210938 24.6601562,7.91796875 C24.6601562,6.94270833 24.3502604,6.21354167 23.7304688,5.73046875 C23.1106771,5.24739583 22.1559245,5.00585938 20.8662109,5.00585938 L20.8662109,5.00585938 L18.0429688,5.00585938 L18.0429688,15 L19.6767578,15 Z M20.8115234,9.65429688 L19.6767578,9.65429688 L19.6767578,6.38671875 L20.7568359,6.38671875 C21.4996745,6.38671875 22.0556641,6.50976562 22.4248047,6.75585938 C22.7939453,7.00195312 22.9785156,7.40755208 22.9785156,7.97265625 C22.9785156,8.52864583 22.8076172,8.94791667 22.4658203,9.23046875 C22.1240234,9.51302083 21.5725911,9.65429688 20.8115234,9.65429688 L20.8115234,9.65429688 Z M29.1308594,15.1367188 C30.2610677,15.1367188 31.1474609,14.8837891 31.7900391,14.3779297 C32.4326172,13.8720703 32.7539062,13.1748047 32.7539062,12.2861328 C32.7539062,11.8349609 32.6741536,11.4430339 32.5146484,11.1103516 C32.3551432,10.7776693 32.1044922,10.4791667 31.7626953,10.2148438 C31.4208984,9.95052083 30.883138,9.6656901 30.1494141,9.36035156 C29.4977214,9.09147135 29.0465495,8.875 28.7958984,8.7109375 C28.5452474,8.546875 28.3652344,8.37255859 28.2558594,8.18798828 C28.1464844,8.00341797 28.0917969,7.78125 28.0917969,7.52148438 C28.0917969,7.14322917 28.2285156,6.83902995 28.5019531,6.60888672 C28.7753906,6.37874349 29.1764323,6.26367188 29.7050781,6.26367188 C30.4023438,6.26367188 31.1953125,6.45052083 32.0839844,6.82421875 L32.0839844,6.82421875 L32.6035156,5.49121094 C31.655599,5.0719401 30.703125,4.86230469 29.7460938,4.86230469 C28.7480469,4.86230469 27.9527995,5.1015625 27.3603516,5.58007812 C26.7679036,6.05859375 26.4716797,6.71484375 26.4716797,7.54882812 C26.4716797,8.21419271 26.6585286,8.78385417 27.0322266,9.2578125 C27.4059245,9.73177083 28.0485026,10.1533203 28.9599609,10.5224609 C29.8440755,10.8779297 30.4274089,11.1855469 30.7099609,11.4453125 C30.992513,11.7050781 31.1337891,12.0218099 31.1337891,12.3955078 C31.1337891,12.8102214 30.9799805,13.140625 30.6723633,13.3867188 C30.3647461,13.6328125 29.8873698,13.7558594 29.2402344,13.7558594 C28.7981771,13.7558594 28.3208008,13.6943359 27.8081055,13.5712891 C27.2954102,13.4482422 26.8111979,13.2796224 26.3554688,13.0654297 L26.3554688,13.0654297 L26.3554688,14.6103516 C27.0755208,14.961263 28.000651,15.1367188 29.1308594,15.1367188 Z M38.140625,15 L38.140625,6.40722656 L41.0800781,6.40722656 L41.0800781,5.00585938 L33.5673828,5.00585938 L33.5673828,6.40722656 L36.5068359,6.40722656 L36.5068359,15 L38.140625,15 Z M52.1132812,15 L52.1132812,13.5986328 L47.8818359,13.5986328 L47.8818359,5.00585938 L46.2480469,5.00585938 L46.2480469,15 L52.1132812,15 Z M58.0332031,15.1367188 C59.5234375,15.1367188 60.675293,14.6855469 61.4887695,13.7832031 C62.3022461,12.8808594 62.7089844,11.6162109 62.7089844,9.98925781 C62.7089844,8.3577474 62.3033854,7.09309896 61.4921875,6.1953125 C60.6809896,5.29752604 59.5325521,4.84863281 58.046875,4.84863281 C56.5384115,4.84863281 55.3774414,5.2906901 54.5639648,6.17480469 C53.7504883,7.05891927 53.34375,8.32584635 53.34375,9.97558594 C53.34375,11.6253255 53.7482096,12.8979492 54.5571289,13.793457 C55.3660482,14.6889648 56.5247396,15.1367188 58.0332031,15.1367188 Z M58.0332031,13.7421875 C57.0579427,13.7421875 56.3219401,13.4243164 55.8251953,12.7885742 C55.3284505,12.152832 55.0800781,11.2197266 55.0800781,9.98925781 C55.0800781,8.76334635 55.3295898,7.83365885 55.8286133,7.20019531 C56.3276367,6.56673177 57.0670573,6.25 58.046875,6.25 C59.0175781,6.25 59.7478841,6.56673177 60.237793,7.20019531 C60.7277018,7.83365885 60.9726562,8.76334635 60.9726562,9.98925781 C60.9726562,11.2333984 60.7254232,12.1699219 60.230957,12.7988281 C59.7364909,13.4277344 59.0039062,13.7421875 58.0332031,13.7421875 Z M69.0527344,15.1367188 C70.5429688,15.1367188 71.6948242,14.6855469 72.5083008,13.7832031 C73.3217773,12.8808594 73.7285156,11.6162109 73.7285156,9.98925781 C73.7285156,8.3577474 73.3229167,7.09309896 72.5117188,6.1953125 C71.7005208,5.29752604 70.5520833,4.84863281 69.0664062,4.84863281 C67.5579427,4.84863281 66.3969727,5.2906901 65.5834961,6.17480469 C64.7700195,7.05891927 64.3632812,8.32584635 64.3632812,9.97558594 C64.3632812,11.6253255 64.7677409,12.8979492 65.5766602,13.793457 C66.3855794,14.6889648 67.5442708,15.1367188 69.0527344,15.1367188 Z M69.0527344,13.7421875 C68.077474,13.7421875 67.3414714,13.4243164 66.8447266,12.7885742 C66.3479818,12.152832 66.0996094,11.2197266 66.0996094,9.98925781 C66.0996094,8.76334635 66.3491211,7.83365885 66.8481445,7.20019531 C67.347168,6.56673177 68.0865885,6.25 69.0664062,6.25 C70.0371094,6.25 70.7674154,6.56673177 71.2573242,7.20019531 C71.7472331,7.83365885 71.9921875,8.76334635 71.9921875,9.98925781 C71.9921875,11.2333984 71.7449544,12.1699219 71.2504883,12.7988281 C70.7560221,13.4277344 70.0234375,13.7421875 69.0527344,13.7421875 Z M77.5087891,15 L77.5087891,11.2607422 L78.4726562,10.4746094 L81.6103516,15 L83.5039062,15 L79.6484375,9.38769531 C80.4049479,8.5172526 81.6559245,7.05664062 83.4013672,5.00585938 L83.4013672,5.00585938 L81.5419922,5.00585938 L78.8417969,8.19824219 C78.3997396,8.70410156 77.9554036,9.23046875 77.5087891,9.77734375 L77.5087891,9.77734375 L77.5087891,5.00585938 L75.875,5.00585938 L75.875,15 L77.5087891,15 Z"
        />
      </g>
    </svg>
  )
}
