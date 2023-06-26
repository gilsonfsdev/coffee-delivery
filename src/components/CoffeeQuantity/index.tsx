import { useContext } from 'react'
import { Input } from './style'
import { Minus, Plus } from 'phosphor-react'
import { CoffeeContext } from '../../context/CoffeeContext'

interface PropsType {
  quantity: number
  id: number
  handleRemoveCoffee: (idToRemove: number) => void
}

export function CoffeeQuantity({
  quantity,
  id,
  handleRemoveCoffee,
}: PropsType) {
  const { selectedCoffees, setSelectedCoffees } = useContext(CoffeeContext)

  function handleDecrease(idToDecrease: number) {
    if (quantity > 1) {
      const updatedCoffees = selectedCoffees.map((coffee) =>
        coffee.id === idToDecrease
          ? { ...coffee, quantity: coffee.quantity - 1 }
          : coffee,
      )
      setSelectedCoffees(updatedCoffees)
    } else {
      handleRemoveCoffee(id)
    }
  }

  function handleAdd(idToAdd: number) {
    const updatedCoffees = selectedCoffees.map((coffee) =>
      coffee.id === idToAdd
        ? { ...coffee, quantity: coffee.quantity + 1 }
        : coffee,
    )
    setSelectedCoffees(updatedCoffees)
  }

  return (
    <Input>
      <button onClick={() => handleDecrease(id)}>
        <Minus />
      </button>
      <p>{quantity}</p>
      <button onClick={() => handleAdd(id)}>
        <Plus />
      </button>
    </Input>
  )
}
