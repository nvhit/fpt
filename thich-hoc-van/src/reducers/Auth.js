const defaultUserInfo = {
  name: 'thành viên',
  image: 'assets//images//faces//face-2.jpg'
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}