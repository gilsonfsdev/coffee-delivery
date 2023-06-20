import { AddProducts, Input, Paragráfo, ProductCard, Span } from './style'
import { useState } from 'react'

import ButtonSvg from '../../../assets/Button.svg'
import { Minus, Plus } from 'phosphor-react'

export enum CoffeeType {
  Tradicional = 'Tradicional',
  Alcoolico = 'Alcoólico',
  Especial = 'Especial',
  Gelado = 'Gelado',
  ComLeite = 'Com Leite',
}

export interface CoffeesType {
  id: number
  img: string
  type: CoffeeType[]
  name: string
  description: string
  value: string
}

export function MenuCoffe({
  id,
  img,
  type,
  name,
  description,
  value,
}: CoffeesType) {
  const [howMuch, setHowMuch] = useState(0)

  function handleDecrease() {
    setHowMuch((state) => (state > 0 ? state - 1 : 0))
  }

  function handleAdd() {
    setHowMuch((state) => state + 1)
  }

  return (
    <ProductCard>
      <img src={img} alt="" />
      <div>
        {type.map((type) => {
          return <Span key={id}>{type}</Span>
        })}
      </div>
      <h4>{name}</h4>
      <Paragráfo>{description}</Paragráfo>
      <AddProducts>
        <p>
          R$ <span>{value}</span>
        </p>
        <Input>
          <button onClick={handleDecrease}>
            <Minus />
          </button>
          <p>{howMuch}</p>
          <button onClick={handleAdd}>
            <Plus />
          </button>
        </Input>
        <img src={ButtonSvg} alt="" />
      </AddProducts>
    </ProductCard>
  )
}
