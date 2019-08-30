const initState = {
  posts: [
    {id: '1', title: 'Dolor sit amet, consectetur adi', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
    {id: '2', title: 'Sit amet, consectetur adipiscin', body: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
    {id: '3', title: 'At, consectetur adipiscing elit', body: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
    {id: '4', title: 'Sectetur adipiscing elit, sed ', body: 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer