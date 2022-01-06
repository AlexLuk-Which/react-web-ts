import GlobalNav from '../../components/molecules/GlobalNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home/'
import About from '../About/'
import Hobby from '../Hobby'
import Error from '../Error/'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
