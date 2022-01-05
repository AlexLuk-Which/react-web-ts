import GlobalNav from '../../components/molecules/GlobalNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home/'
import About from '../About/'
import Hobby from '../Hobby'
import Error from '../Error/'

import './styles.scss'

export const App = () => {
  return (
    // <>
    //   <h1>React Typescript! Hello World!</h1>
    //   <h2>{`${[process.env.BUILD_MODE]}`}</h2>
    //
    // </>
    <div className={'mainBackground'}>
      <BrowserRouter>
        <GlobalNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
