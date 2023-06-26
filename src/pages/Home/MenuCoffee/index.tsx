import { AddProducts, Input, Paragráfo, ProductCard, Span } from './style'
import { useContext, useState, useEffect } from 'react'

import ButtonSvg from '../../../assets/Button.svg'
import { Minus, Plus } from 'phosphor-react'
import {
  CoffeeContext,
  ProdutosNoCarrinhoType,
} from '../../../context/CoffeeContext'
import { Link } from 'react-router-dom'

export enum CoffeeType {
  Tradicional = 'Tradicional',
  Alcoolico = 'Alcoólico',
  Especial = 'Especial',
  Gelado = 'Gelado',
  ComLeite = 'Com Leite',
}

export interface CoffeesType {
  id: number
  pedido?: number
  img: string
  type: CoffeeType[]
  name: string
  description: string
  price: number
  quantity?: number | null
}

export function MenuCoffe({
  id,
  img,
  type,
  name,
  description,
  price,
}: CoffeesType) {
  const [singularCoffeeQuantity, setSingularCoffeeQuantity] = useState(0)
  const { selectedCoffees, setSelectedCoffees, setTotalQuantity } =
    useContext(CoffeeContext)

  useEffect(() => {
    const sumQuantity = selectedCoffees.reduce(
      (total, coffee) => total + coffee.quantity,
      0,
    )
    setTotalQuantity(sumQuantity)
  }, [selectedCoffees, setTotalQuantity])

  function handleDecrease(idToRemove: number) {
    setSingularCoffeeQuantity((state) => (state > 0 ? state - 1 : 0))

    const existingCoffee = selectedCoffees.find(
      (coffee) => coffee.id === idToRemove,
    )

    if (existingCoffee) {
      if (existingCoffee.quantity === 1) {
        setSelectedCoffees((state) =>
          state.filter((coffee) => coffee.id !== idToRemove),
        )
      } else {
        const updatedCoffees = selectedCoffees.map((coffee) =>
          coffee.id === idToRemove
            ? { ...coffee, quantity: coffee.quantity - 1 }
            : coffee,
        )
        setSelectedCoffees(updatedCoffees)
      }
    }
  }

  function handleAdd(idToAdd: number) {
    setSingularCoffeeQuantity((state) => state + 1)

    const existingCoffee = selectedCoffees.find(
      (coffee) => coffee.id === idToAdd,
    )

    if (existingCoffee) {
      const updatedCoffees = selectedCoffees.map((coffee) =>
        coffee.id === idToAdd
          ? { ...coffee, quantity: coffee.quantity + 1 }
          : coffee,
      )
      setSelectedCoffees(updatedCoffees)
    } else {
      const newCoffeeComanda: ProdutosNoCarrinhoType = {
        id,
        img,
        name,
        quantity: 1,
        price,
      }
      setSelectedCoffees((state) => [...state, newCoffeeComanda])
    }
  }

  return (
    <ProductCard>
      <img src={img} alt="" />
      <div>
        {type.map((type, index) => {
          return <Span key={index}>{type}</Span>
        })}
      </div>
      <h4>{name}</h4>
      <Paragráfo>{description}</Paragráfo>
      <AddProducts>
        <p>
          R$ <span>{price}</span>
        </p>
        <Input>
          <button onClick={() => handleDecrease(id)}>
            <Minus />
          </button>
          <p>{singularCoffeeQuantity}</p>
          <button onClick={() => handleAdd(id)}>
            <Plus />
          </button>
        </Input>
        <Link to="/checkout">
          <img src={ButtonSvg} alt="" />
        </Link>
      </AddProducts>
    </ProductCard>
  )
}
