import { HeaderContainer, ShoppingCartDiv } from './styles'
import { Link } from 'react-router-dom'

import map from '../../assets/map.svg'
import shopping from '../../assets/shopping.svg'
import Logo from '../../assets/Logo.svg'

export function Header() {
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
          <Link to="/checkout">
            <img src={shopping} alt="" />
          </Link>
        </span>
      </ShoppingCartDiv>
    </HeaderContainer>
  )
}
