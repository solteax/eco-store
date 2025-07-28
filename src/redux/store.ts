import { createStore, compose, applyMiddleware, Middleware } from "redux"
import thunk from "redux-thunk"

import rootReducer, { RootState } from "./reducers"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const cartPersistence: Middleware<{}, RootState> = (store) => (next) => (action) => {
  const result = next(action)

  const { cart } = store.getState()

  try {
    localStorage.setItem("cartItems", JSON.stringify(cart.items))
  } catch (e) {
    console.warn("Error saving cart to localStorage:", e)
  }

  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, cartPersistence))
)

export default store
