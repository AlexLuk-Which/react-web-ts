import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from '../types'

export default function CarsTravel({
  height = 28,
  width = 28,
}: Props): ReactElement {
  return (
    <svg
      data-testid="svg-cars-travel"
      width={width}
      height={height}
      viewBox="0 0 28 28"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-16.000000, -415.000000)" fill="#000000">
          <g transform="translate(0.000000, 192.000000)">
            <g transform="translate(0.000000, 201.000000)">
              <g transform="translate(16.000000, 22.000000)">
                <path d="M19.8610285,2.91666667 C21.5624945,2.91666667 23.0807027,3.96187527 23.6953046,5.53309486 L23.7673714,5.73219939 L24.8654107,10.4878954 C24.9008909,10.5943361 24.9317826,10.7012016 24.9581929,10.8082772 C26.6775494,11.523142 27.9062133,13.184505 27.9948669,15.1429425 L28,15.3701975 L28,18.378245 L27.999,18.4046667 L28,22.5375275 C28,23.8217329 27.0201843,24.8770901 25.7673459,24.9968061 L25.5294118,25.0081158 L23.8823529,25.0081158 C22.5981476,25.0081158 21.5427904,24.0283001 21.4230744,22.7754617 L21.4117647,22.5375275 L21.411,20.8486667 L6.588,20.8486667 L6.58823529,22.5375275 C6.58823529,23.8217329 5.60841963,24.8770901 4.35558119,24.9968061 L4.11764706,25.0081158 L2.47058824,25.0081158 C1.18638287,25.0081158 0.131025707,24.0283001 0.011309658,22.7754617 L0,22.5375275 L0,15.3701975 C0,13.3137023 1.25632151,11.5506368 3.04334026,10.8066251 L3.08526097,10.6468408 L3.13458934,10.4878954 L4.23262856,5.73219939 C4.77067938,4.11804694 6.24235088,3.00827224 7.92729487,2.9220729 L8.13897155,2.91666667 L19.8610285,2.91666667 Z M1.6472085,20.7083049 L1.64705882,22.5375275 C1.64705882,22.9418144 1.93838262,23.278059 2.32255778,23.3477888 L2.47058824,23.3610569 L4.11764706,23.3610569 C4.52193393,23.3610569 4.85817849,23.0697332 4.92790831,22.685558 L4.94117647,22.5375275 L4.941,20.8486667 L2.47058824,20.8488332 C2.18188558,20.8488332 1.90474885,20.7993136 1.6472085,20.7083049 Z M26.3527915,20.7083049 C26.1439387,20.7821086 25.9221985,20.8286273 25.6918536,20.8435781 L25.5294118,20.8488332 L23.058,20.8486667 L23.0588235,22.5375275 C23.0588235,22.9418144 23.3501473,23.278059 23.7343225,23.3477888 L23.8823529,23.3610569 L25.5294118,23.3610569 C25.9336986,23.3610569 26.2699432,23.0697332 26.339673,22.685558 L26.3529412,22.5375275 L26.3527915,20.7083049 Z M23.0588235,12.0760798 L4.94117647,12.0760798 C3.1846197,12.0760798 1.7491806,13.450948 1.65227345,15.1832701 L1.64705882,15.3701975 L1.64705882,18.378245 C1.64705882,18.7980814 1.96122309,19.1445407 2.36728646,19.1953579 L2.47058824,19.2017744 L25.5294118,19.2017744 C25.9492481,19.2017744 26.2957075,18.8876101 26.3465247,18.4815468 L26.3529412,18.378245 L26.3529412,15.3701975 C26.3529412,13.5509065 24.8781145,12.0760798 23.0588235,12.0760798 Z M7.41176471,13.7596175 C8.41616491,13.7596175 9.23039216,14.5738448 9.23039216,15.578245 L9.23039216,15.578245 L9.23039216,16.4017744 C9.23039216,17.4061746 8.41616491,18.2204018 7.41176471,18.2204018 L7.41176471,18.2204018 L4.94117647,18.2204018 C3.93677626,18.2204018 3.12254902,17.4061746 3.12254902,16.4017744 L3.12254902,16.4017744 L3.12254902,15.578245 C3.12254902,14.5738448 3.93677626,13.7596175 4.94117647,13.7596175 L4.94117647,13.7596175 Z M23.0588235,13.7596175 C24.0632237,13.7596175 24.877451,14.5738448 24.877451,15.578245 L24.877451,15.578245 L24.877451,16.4017744 C24.877451,17.4061746 24.0632237,18.2204018 23.0588235,18.2204018 L23.0588235,18.2204018 L20.5882353,18.2204018 C19.5838351,18.2204018 18.7696078,17.4061746 18.7696078,16.4017744 L18.7696078,16.4017744 L18.7696078,15.578245 C18.7696078,14.5738448 19.5838351,13.7596175 20.5882353,13.7596175 L20.5882353,13.7596175 Z M7.41176471,14.9262842 L4.94117647,14.9262842 C4.58110847,14.9262842 4.28921569,15.218177 4.28921569,15.578245 L4.28921569,15.578245 L4.28921569,16.4017744 C4.28921569,16.7618424 4.58110847,17.0537352 4.94117647,17.0537352 L4.94117647,17.0537352 L7.41176471,17.0537352 C7.7718327,17.0537352 8.06372549,16.7618424 8.06372549,16.4017744 L8.06372549,16.4017744 L8.06372549,15.578245 C8.06372549,15.218177 7.7718327,14.9262842 7.41176471,14.9262842 L7.41176471,14.9262842 Z M23.0588235,14.9262842 L20.5882353,14.9262842 C20.2281673,14.9262842 19.9362745,15.218177 19.9362745,15.578245 L19.9362745,15.578245 L19.9362745,16.4017744 C19.9362745,16.7618424 20.2281673,17.0537352 20.5882353,17.0537352 L20.5882353,17.0537352 L23.0588235,17.0537352 C23.4188915,17.0537352 23.7107843,16.7618424 23.7107843,16.4017744 L23.7107843,16.4017744 L23.7107843,15.578245 C23.7107843,15.218177 23.4188915,14.9262842 23.0588235,14.9262842 L23.0588235,14.9262842 Z M19.8610285,4.56372549 L8.13897155,4.56372549 C7.13463393,4.56372549 6.23671661,5.17069181 5.85675697,6.08800509 L5.79516575,6.25304513 L4.83,10.4306667 L4.94117647,10.429021 L7.66063235,10.4289107 C8.03046277,8.5541818 9.68345519,7.14034589 11.6666667,7.14034589 C13.649969,7.14034589 15.3030221,8.5543114 15.6727518,10.4291685 L23.0588235,10.429021 C23.0958997,10.429021 23.1328804,10.4294293 23.1697615,10.4302418 L22.2048342,6.25304513 C21.8685525,5.24419984 20.9244448,4.56372549 19.8610285,4.56372549 Z M11.6666667,8.30701256 C10.3313395,8.30701256 9.20560093,9.20436764 8.85958738,10.4289413 L14.4738082,10.4291617 C14.1278675,9.20447536 13.0020739,8.30701256 11.6666667,8.30701256 Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
