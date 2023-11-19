const initialState = {
  a: 0,
  b: 0,
  result: 0,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_A':
          return {
              ...state,
              a: action.payload,
      };
      case 'SET_B':
          return {
              ...state,
              b: action.payload,
      };
      case 'ADD':
          return {
              ...state,
              result: state.a + state.b,
          };
      case 'SUBTRACT':
          return {
              ...state,
              result: state.a - state.b,
          };
      case 'MULTIPLY':
          return {
              ...state,
              result: state.a * state.b,
          };
      case 'DIVIDE':
          return {
              ...state,
              result: state.a / state.b,
          };
      default:
          return state;
  }
};

export default calculatorReducer;
