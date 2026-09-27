import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookingProvider } from './components/booking/AppointmentModal'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import AboutDoctor from './pages/AboutDoctor'
import Services from './pages/Services'
import Clinic from './pages/Clinic'
import PatientInfo from './pages/PatientInfo'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about-doctor" element={<AboutDoctor />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clinic" element={<Clinic />} />
            <Route path="/patient-info" element={<PatientInfo />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  )
}