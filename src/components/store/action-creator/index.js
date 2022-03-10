export const addPost = (post) => {
	return (dispatch) => {
		dispatch({
			type: 'ADD',
			payload: post,
		});
	};
};
//an action creator is just a function that dispatches an action.
