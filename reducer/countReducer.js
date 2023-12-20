// Não altere o nome desta função
export function counterReducer(state,action) {
    
    // crie a função reducer abaixo desta linha
    
     switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

    
