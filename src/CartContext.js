import React, { createContext, useContext, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }],
      };
    }
    case 'DECREMENT': {
      const existing = state.items.find((i) => i.id === action.id);
      if (!existing) return state;
      if (existing.quantity <= 1) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== action.id),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i
        ),
      };
    }
    case 'REMOVE': {
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.id),
      };
    }
    case 'CLEAR': {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const value = useMemo(() => {
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return {
      items: state.items,
      itemCount,
      subtotal,
      addItem: (item) => dispatch({ type: 'ADD', item }),
      removeItem: (id) => dispatch({ type: 'REMOVE', id }),
      decrementItem: (id) => dispatch({ type: 'DECREMENT', id }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}

