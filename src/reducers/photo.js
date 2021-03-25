import type from "../actions/constant";

const initialState = { isLoading: false, error: false, data: [] };

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PHOTO_REQUEST:
      return { ...state, isLoading: true };
    case type.GET_PHOTO_SUCCESS:
      return { ...state, isLoading: false, data: [...action.payload] };
    case type.GET_PHOTO_FAILED:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
};

export default photoReducer;
