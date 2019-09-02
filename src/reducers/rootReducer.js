const initState = {
  posts: [
    {id: '1', title: 'Dolor sit amet, consectetur adi', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
    {id: '2', title: 'Sit amet, consectetur adipiscin', body: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
    {id: '3', title: 'At, consectetur adipiscing elit', body: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'},
    {id: '4', title: 'Sectetur adipiscing elit, sed ', body: 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'}
  ],
  ninjas: [
    { name: 'Claudia', age: 41, nationality: 'Mexican', id: 1 },
    { name: 'Benjamin', age: 66, nationality: 'Mexican', id: 2 },
    { name: 'Noe', age: 48, nationality: 'Mexican', id: 3 },
    { name: 'Cinthya', age: 15, nationality: 'Mexican', id: 4 },
    { name: 'Ravi', age: 39, nationality: 'British', id: 5 }
]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELTE_POST') {
    let newPosts = state.posts.filter(post => action.id !== post.id)
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer