import {
  AdvantagesDiv,
  DescriptionDiv,
  HomeContainer,
  ProductsContainer,
  ProductsDiv,
  TextDiv,
} from './style'

// components
import { MenuCoffe } from './MenuCoffee'

// data
import { coffes } from '../../data'

// images
import coffeeHome from '../../assets/coffeeHome.png'
import homeOne from '../../assets/home_one.svg'
import homeTwo from '../../assets/home_two.svg'
import homeThree from '../../assets/home_three.svg'
import homeFour from '../../assets/home_four.svg'

export function Home() {
  const coffeeData = coffes
  return (
    <>
      <HomeContainer>
        <TextDiv>
          <DescriptionDiv>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </DescriptionDiv>

          <AdvantagesDiv>
            <p>
              <img src={homeOne} alt="" />
              Compra simples e segura
            </p>
            <p>
              <img src={homeThree} alt="" />
              Embalagem mantém o café intacto
            </p>
            <p>
              <img src={homeTwo} alt="" />
              Entrega rápida e rastreada
            </p>
            <p>
              <img src={homeFour} alt="" />O café chega fresquinho até você
            </p>
          </AdvantagesDiv>
        </TextDiv>
        <img src={coffeeHome} alt="" />
      </HomeContainer>

      <ProductsDiv>
        <h2>Nossos cafés</h2>
        <ProductsContainer>
          {coffeeData.map((coffee) => {
            return (
              <MenuCoffe
                id={coffee.id}
                img={coffee.img}
                key={coffee.id}
                type={coffee.type}
                name={coffee.name}
                description={coffee.description}
                value={coffee.value}
              />
            )
          })}
        </ProductsContainer>
      </ProductsDiv>
    </>
  )
}
