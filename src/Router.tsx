import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { CheckOut } from './pages/Checkout'
import { Home } from './pages/Home'
import { Sucess } from './pages/CheckoutFilled'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/checkout/sucess" element={<Sucess />} />
      </Route>
    </Routes>
  )
}
