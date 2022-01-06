import React from 'react'
import type { ReactElement } from 'react'

import type { Props } from './types'

export default function Logo({ height = 20, width = 75 }: Props): ReactElement {
  return (
    <svg width={width} height={height} viewBox="0 0 75 20">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-151.000000, -85.000000)">
          <g transform="translate(139.000000, 66.000000)">
            <g transform="translate(12.870525, 19.026375)">
              <path
                d="M15.0213904,12.0495425 L12.9336027,3.52040416 C12.6027762,2.20641797 12.1444851,1.81004653 10.9986808,1.81004653 L8.86009091,1.81004653 L6.41592262,12.0495425 L4.27733276,1.81004653 L-6.57252031e-14,1.81004653 L4.12446704,19.0659129 L7.84175121,19.0659129 L10.5403897,9.1982014 L13.2901364,19.0659129 L16.9309112,19.0659129 L21.1063334,1.81004653 L17.0328217,1.81004653 L15.0213904,12.0495425"
                fill="#FFFFFE"
              />
              <path
                d="M29.8134056,5.72712015 C28.38773,5.72712015 26.7328324,6.19829551 25.790696,6.99148541 L25.790696,3.29748248 C25.790696,2.35528077 25.4595635,1.80989752 24.4413768,1.80989752 L21.7424323,1.80989752 L21.7424323,19.0659129 L25.790696,19.0659129 L25.790696,9.2725583 C26.6055208,9.07422357 27.3436832,8.95039475 28.1331069,8.95039475 C28.9985808,8.95039475 29.5078272,9.17361445 29.5078272,10.1900241 L29.5078272,19.0659129 L33.5559379,19.0659129 L33.5559379,9.12369549 C33.5559379,7.18996915 32.7668203,5.72712015 29.8134056,5.72712015"
                fill="#FFFFFE"
              />
              <polygon
                fill="#FFFFFE"
                points="34.7014362 19.0659129 38.7496999 19.0659129 38.7496999 6.07431768 34.7014362 6.07431768"
              />
              <path
                d="M39.6404219,12.5701898 C39.6404219,16.4629745 41.8301201,19.4131104 46.2346114,19.4131104 C47.889509,19.4131104 49.391847,19.0909469 50.2319198,18.3223439 L50.2319198,15.8429363 C48.6533786,16.1406619 47.889509,16.1650999 46.9475257,16.1650999 C44.859891,16.1650999 43.8158442,14.7769058 43.8158442,12.5701898 C43.8158442,10.3636228 44.859891,8.97513071 46.9475257,8.97513071 C47.889509,8.97513071 48.6533786,8.99986667 50.2319198,9.29774129 L50.2319198,6.81818467 C49.391847,6.04973073 47.889509,5.72726916 46.2346114,5.72726916 C41.8301201,5.72726916 39.6404219,8.67755411 39.6404219,12.5701898"
                fill="#FFFFFE"
              />
              <path
                d="M59.2444174,5.72712015 C57.8188949,5.72712015 56.1638442,6.19829551 55.2217078,6.99148541 L55.2217078,3.29748248 C55.2217078,2.35528077 54.8908813,1.80989752 53.8725416,1.80989752 L51.1735972,1.80989752 L51.1735972,19.0659129 L55.2217078,19.0659129 L55.2217078,9.2725583 C56.0365326,9.07422357 56.775001,8.95039475 57.5644247,8.95039475 C58.4297457,8.95039475 58.938992,9.17361445 58.938992,10.1900241 L58.938992,19.0659129 L62.9871027,19.0659129 L62.9871027,9.12369549 C62.9871027,7.18996915 62.1979851,5.72712015 59.2444174,5.72712015"
                fill="#FFFFFE"
              />
              <path
                d="M38.0455076,1.80989752 L35.4053223,1.80989752 C34.9242314,1.80989752 34.5303612,2.19330493 34.5303612,2.66194709 L34.5303612,4.11332218 C34.5303612,4.58196434 34.9242314,4.96537175 35.4053223,4.96537175 L38.0455076,4.96537175 C38.5269046,4.96537175 38.9204688,4.58196434 38.9204688,4.11332218 L38.9204688,2.66194709 C38.9204688,2.19330493 38.5269046,1.80989752 38.0455076,1.80989752"
                fill="#FFFFFE"
              />
              <path
                d="M67.3153907,2.0250468e-13 C65.6349389,2.0250468e-13 63.5215972,0.471175363 62.2994365,1.38819408 L62.2994365,3.96684356 C63.6235076,3.69415194 65.2020489,3.59505908 65.9148102,3.59505908 C67.824331,3.59505908 68.9955364,4.14044233 68.9955364,5.6281763 C68.9955364,6.99148541 68.3081763,7.38845289 67.162372,8.35524156 C65.7620975,9.54539893 64.5400899,10.0907822 64.5400899,12.6941676 L64.5400899,14.4544442 L68.5882006,14.4544442 L68.5882006,13.165492 C68.5882006,11.6278391 69.4030253,11.0826048 70.7521915,10.0165743 C72.3818411,8.72702604 73.1711117,7.21485413 73.1711117,5.10723099 C73.1711117,2.15694604 71.1850815,2.0250468e-13 67.3153907,2.0250468e-13"
                fill="#121514"
              />
              <path
                d="M67.8355014,15.549383 L65.292789,15.549383 C64.7846138,15.549383 64.3691679,15.9540991 64.3691679,16.4489674 L64.3691679,18.1664776 C64.3691679,18.6610478 64.7846138,19.0659129 65.292789,19.0659129 L67.8355014,19.0659129 C68.3433706,19.0659129 68.7591225,18.6610478 68.7591225,18.1664776 L68.7591225,16.4489674 C68.7591225,15.9540991 68.3433706,15.549383 67.8355014,15.549383"
                fill="#121514"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
