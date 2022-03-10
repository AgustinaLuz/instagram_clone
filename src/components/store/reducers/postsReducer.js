const initialState = [];

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD':
			return [...state, action.payload];
		default:
			return state;
	}
};

export default postsReducer;
