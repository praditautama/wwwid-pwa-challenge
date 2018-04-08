import CONSTANT from './constant';
import { startLoading, finishLoading, errorLoading } from '../../utils/reducerUtils';

const initialState = {
  items: null,
};

const postListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANT.REQUEST_POSTLIST: {
      return startLoading(state);
    }
    case CONSTANT.REQUEST_POSTLIST_ERROR: {
      return errorLoading(state, action);
    }
    case CONSTANT.REQUEST_POSTLIST_SUCCESS: {
      /* track(state.currentPage > 1 ? 'Scroll' : 'Load', {
        category: 'Home Post List',
        value: state.currentPage,
        nonInteraction: state.currentPage <= 1
      }); */
      const finish = finishLoading(state);
      return {
        ...finish,
        ...action.payload,
        // posts: [].concat(state.posts, postResponse),
      };
    }
    default: {
      return state;
    }
  }
};

export default postListReducer;
