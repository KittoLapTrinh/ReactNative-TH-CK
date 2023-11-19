export const setA = (num) => {
  return {
      type: 'SET_A',
      payload: num,
  };
};

export const setB = (num) => {
  return {
      type: 'SET_B',
      payload: num,
  };
};
export const add = () => {
  return {
      type: 'ADD',
  };
};

export const subtract = () => {
  return {
      type: 'SUBTRACT',
  };
};

export const multiply = () => {
  return {
      type: 'MULTIPLY',
  };
};

export const divide = () => {
  return {
      type: 'DIVIDE',
  };
};