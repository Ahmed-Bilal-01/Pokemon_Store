export const addToCart = (item: any) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const removeFromCart = (itemId: any) => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const updateCart = (updatedItems: any) => ({
  type: 'UPDATE_CART',
  payload: updatedItems,
});

// Bottom Tab Actions

export const changeSelectedScreen = (screenName: any) => ({
  type: 'CHANGE_SELECTED_SCREEN',
  payload: screenName,
});
