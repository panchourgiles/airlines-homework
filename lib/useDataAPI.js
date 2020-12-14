import axios from 'axios';
import { useReducer } from 'react';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case 'FETCH_FAILURE':
      return {
        data: { message: action.payload },
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

const useDataAPI = (initialData) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });

  const fetchData = async (fetchParams, onSuccess) => {
    dispatch({ type: 'FETCH_INIT' });

    try {
      const result = await axios({
        method: fetchParams.method,
        url: fetchParams.url,
        data: fetchParams.bodyParam ? fetchParams.bodyParam : null,
        headers: {
          'content-type': 'application/json'
        }
      });
      const data = result.data;
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
      if (onSuccess) {
        onSuccess(data);
      }
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE', payload: error.message });
    }
  };

  return { state, fetchData };
};
export default useDataAPI;
