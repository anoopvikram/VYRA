import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

/* ---------------- REDUCER ---------------- */

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find((i) => i.id === action.payload.id);

      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, qty: 1 }];
    }

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    case "CHANGE_QTY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: Math.max(1, action.payload.qty) }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

/* ---------------- PROVIDER ---------------- */

export function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  const isInCart = (id) => cartItems.some((item) => item.id === id);

    const toggleCartItem = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
        dispatch({ type: "REMOVE_ITEM", payload: product.id });
    } else {
        dispatch({ type: "ADD_ITEM", payload: product });
    }
    };

  const addToCart = (product) =>
    dispatch({ type: "ADD_ITEM", payload: product });

  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });

  const changeQty = (id, qty) =>
    dispatch({ type: "CHANGE_QTY", payload: { id, qty } });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

    const value = {
    cartItems,
    addToCart,
    removeFromCart,
    changeQty,
    clearCart,
    isInCart,
    toggleCartItem,
    };


  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

/* ---------------- HOOK ---------------- */

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
