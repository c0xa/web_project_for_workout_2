const initialState = {
	items: []
}

const reducer = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {
		case 'ADD': {
			return {
				...state,
				items: [
					...state.items,
					payload
				]
			}
		}
		case 'REMOVE': {
			return {
				...state,
				items: state.items.filter((item) => item !== payload)
			}
		}
		default:
			return state
	}
}

const createStore = (reducer) => {
	return {
		reducer,
		state: undefined,
		subscriptions: [],
		subscribe(subscription) {
			this.subscriptions.push(subscription)
		},
		dispatch(action) {
			this.state = this.reducer(this.state, action)
			this.subscriptions.forEach((subscription) => subscription(this.state))
		}
	}
}