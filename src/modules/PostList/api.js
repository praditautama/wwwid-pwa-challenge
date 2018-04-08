import call from '../../commons/api/RestApi';

const getPostList = (page, perPage) => call('/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid');

export default getPostList;

