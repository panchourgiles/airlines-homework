import { createContext, useContext, useReducer } from 'react';

const RouteContext = createContext();
const RouteDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ROUTE':
      return {
        ...state,
        ...action.payload
      };
    case 'REMOVE_ROUTE':
      return {};
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const RoutesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  return (
    <RouteDispatchContext.Provider value={dispatch}>
      <RouteContext.Provider value={state}>{children}</RouteContext.Provider>
    </RouteDispatchContext.Provider>
  );
};

export const useRoute = () => useContext(RouteContext);
export const useDispatchRoute = () => useContext(RouteDispatchContext);
