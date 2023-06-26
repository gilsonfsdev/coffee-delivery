import { HeaderContainer, ShoppingCartDiv, P } from './styles'
import { Link } from 'react-router-dom'

import map from '../../assets/map.svg'
import shopping from '../../assets/shopping.svg'
import Logo from '../../assets/Logo.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Header() {
  const { totalQuantity } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <ShoppingCartDiv>
        <div>
          <img src={map} alt="" />
          <p>Maringá, PR</p>
        </div>
        <span>
          {totalQuantity > 0 ? <P>{totalQuantity}</P> : null}

          <Link to="/checkout">
            <img src={shopping} alt="" />
          </Link>
        </span>
      </ShoppingCartDiv>
    </HeaderContainer>
  )
}
