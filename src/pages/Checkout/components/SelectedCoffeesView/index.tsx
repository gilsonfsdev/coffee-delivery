import { Trash } from 'phosphor-react'
import { CoffeeQuantity } from '../../../../components/CoffeeQuantity'
import { CoffeeContext } from '../../../../context/CoffeeContext'
import { Container, QuantityLayout } from './styles'
import { useContext } from 'react'

export function SelectedCoffeesView() {
  const { selectedCoffees, setSelectedCoffees } = useContext(CoffeeContext)

  function handleRemoveCoffee(idToRemove: number): void {
    setSelectedCoffees((state) =>
      state.filter((coffee) => coffee.id !== idToRemove),
    )
  }

  return (
    <div>
      {selectedCoffees?.map((coffee) => {
        return (
          <Container key={coffee.id}>
            <img src={coffee.img} alt={coffee.name} />
            <div>
              <span>{coffee.name}</span>
              <QuantityLayout>
                <CoffeeQuantity
                  quantity={coffee.quantity}
                  id={coffee.id}
                  handleRemoveCoffee={handleRemoveCoffee}
                />
                <button onClick={() => handleRemoveCoffee(coffee.id)}>
                  <Trash /> Remover
                </button>
              </QuantityLayout>
            </div>
            <span>R$ {coffee.price}</span>
          </Container>
        )
      })}
    </div>
  )
}
