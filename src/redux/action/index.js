// ITEMS TO CART

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// DELETE FROM CART

export const removeItem = (product) => {
  return {
    type: "REMOVEITEM",
    payload: product,
  };
};
