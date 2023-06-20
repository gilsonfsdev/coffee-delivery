import { CoffeesType } from '../../pages/Home/MenuCoffee'
import { ActionTypes } from './actions'

export function CoffesReducer(state: CoffeesType[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return {
        ...state,
      }
    case ActionTypes.DECREASE_COFFEE:
      return {
        ...state,
      }
    case ActionTypes.DELETE_COFFEE:
      return {
        ...state,
      }
    default:
      return state
  }
}
