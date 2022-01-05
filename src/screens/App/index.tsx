import './styles.scss'
import IMAGE from '../../assets/TTCoach.png'
import Logo from '../../assets/logo.svg'

export const App = () => {
  return (
    <>
      <h1>React Typescript! Hello World!</h1>
      <h2>{`${[process.env.BUILD_MODE]}`}</h2>
      <img src={IMAGE} alt="React logo" width="300" height="300" />
      <img src={Logo} alt="React logo" width="300" />
    </>
  )
}
