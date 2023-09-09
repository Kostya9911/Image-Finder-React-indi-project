import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '33109675-647afcf76cb57c4c0eb06a2e1';

export const fetchImages = async (name, page) => {
  const params = new URLSearchParams({
    q: name,
    page: page,
    key: KEY,
    mage_type: 'photo',
    orientation: 'horizontal',
    per_page: 8,
  });

  const resp = await axios.get(`?${params}`);
  return resp.data;

  // const resp = await axios.get(
  //   `?q=${name}&page=${page}&key=${KEY}&image_type=photo&=horizontal&per_page=12`
  // );
  // return resp.data;
};
