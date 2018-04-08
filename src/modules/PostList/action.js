import getPostList from './api';
import CONSTANT from './constant';

const requestPostList = (page, perPage) => ({
  type: CONSTANT.REQUEST_POSTLIST,
  payload: {
    promise: getPostList(page, perPage),
  },
});

export default requestPostList;
