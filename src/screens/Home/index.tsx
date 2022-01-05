import IMAGE from '../../assets/TTCoach.png'
import Logo from '../../assets/logo.svg'
import type { ReactElement } from 'react'
import './styles.scss'

export default function Home(): ReactElement {
  return (
    <section className={'homeContainer'}>
      <div className={'homeInnerContainer'}>
        <h1>Hello Website </h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            malesuada dolor eu risus placerat, non pretium purus placerat.
            Vestibulum dui nisi, ullamcorper a ante ut, lobortis tincidunt
            massa. Donec semper mauris vitae tempor iaculis. Cras sodales
            lacinia nisl vitae laoreet. Nullam quis mi eget nisi varius mattis
            eu sit amet eros. Nulla pharetra ac diam nec varius. Nulla elementum
            lacus augue, non viverra diam viverra in. Nullam at est egestas,
            cursus eros at, maximus ligula. Donec mattis lorem justo, cursus
            scelerisque nulla ultrices sed. Vestibulum tincidunt, libero in
            suscipit elementum, leo nunc porttitor odio, quis venenatis arcu
            lacus scelerisque nulla. Vivamus enim velit, dictum eget ullamcorper
            nec, ornare sit amet purus. Maecenas interdum hendrerit volutpat.
            Sed laoreet, nibh non elementum lacinia, nisi magna sagittis ex, id
            pulvinar elit sem at augue.
          </p>

          <br />
          <br />
          <br />

          <img src={IMAGE} alt="React logo" width="300" height="300" />
          <img src={Logo} alt="React logo" width="300" />
        </div>
      </div>
    </section>
  )
}
