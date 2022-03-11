const initialState = [];

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD':
			if (state.includes(action.payload)) {
				//si el state actual incluye el id
				return state;
				//devuelve el state, sin agregar el nuevo
			} else {
				return [...state, action.payload];
				//state + el nuevo id
			}
		default:
			return state;
	}
};

export default postsReducer;
