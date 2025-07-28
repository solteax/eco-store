import { combineReducers } from "redux"

import { filter } from "./filter"
import { products } from "./products"
import { cart } from "./cart"

const rootReducer = combineReducers({ filter, products, cart })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
