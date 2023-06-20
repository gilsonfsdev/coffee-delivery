import expresso from './assets/coffees/1expresso.svg'
import americano from './assets/coffees/2americano.svg'
import expressoCremoso from './assets/coffees/3expressoCremoso.svg'
import cafeGelado from './assets/coffees/4cafeGelado.svg'
import cafeComLeite from './assets/coffees/5cafeComLeite.svg'
import latte from './assets/coffees/6latte.svg'
import capuccino from './assets/coffees/7capuccino.svg'
import macchiato from './assets/coffees/8macchiato.svg'
import mochaccino from './assets/coffees/9mochaccino.svg'
import chocolateQuente from './assets/coffees/10chocolateQuente.svg'
import cubano from './assets/coffees/11cubano.svg'
import havaiano from './assets/coffees/12havaiano.svg'
import arabe from './assets/coffees/13arabe.svg'
import irlandes from './assets/coffees/14irlandês.svg'
import { CoffeeType, CoffeesType } from './pages/Home/MenuCoffee'

export const coffes: CoffeesType[] = [
  {
    id: 1,
    img: expresso,
    type: [CoffeeType.Tradicional],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e graõs moídos',
    value: '5,00',
  },
  {
    id: 2,
    img: americano,
    type: [CoffeeType.Tradicional],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: '5,00',
  },
  {
    id: 3,
    img: expressoCremoso,
    type: [CoffeeType.Tradicional],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: '5,00',
  },
  {
    id: 4,
    img: cafeGelado,
    type: [CoffeeType.Tradicional, CoffeeType.Gelado],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: '5,00',
  },
  {
    id: 5,
    img: cafeComLeite,
    type: [CoffeeType.Tradicional, CoffeeType.ComLeite],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: '5,50',
  },
  {
    id: 6,
    img: latte,
    type: [CoffeeType.Tradicional, CoffeeType.ComLeite],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: '6,00',
  },
  {
    id: 7,
    img: capuccino,
    type: [CoffeeType.Tradicional, CoffeeType.ComLeite],
    name: 'Latte',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: '6,00',
  },
  {
    id: 8,
    img: macchiato,
    type: [CoffeeType.Tradicional, CoffeeType.ComLeite],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: '6,00',
  },
  {
    id: 9,
    img: mochaccino,
    type: [CoffeeType.Tradicional, CoffeeType.ComLeite],
    name: 'Moccacino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: '7,00',
  },
  {
    id: 10,
    img: chocolateQuente,
    type: [CoffeeType.Especial, CoffeeType.ComLeite],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: '8,00',
  },
  {
    id: 11,
    img: cubano,
    type: [CoffeeType.Especial, CoffeeType.Alcoolico, CoffeeType.Gelado],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: '10,00',
  },
  {
    id: 12,
    img: havaiano,
    type: [CoffeeType.Especial],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: '6,00',
  },
  {
    id: 13,
    img: arabe,
    type: [CoffeeType.Especial],
    name: 'Arábe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: '6,00',
  },
  {
    id: 14,
    img: irlandes,
    type: [CoffeeType.Especial, CoffeeType.Alcoolico],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: '12,00',
  },
]
