export const loadCartFromStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cartItems")
    return serializedCart ? JSON.parse(serializedCart) : {}
  } catch (e) {
    console.warn("Failed to load cart from localStorage:", e)
    return {}
  }
}
