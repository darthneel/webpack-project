import { SAY_CIAO } from '../actions'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
	[SAY_CIAO]  : (state, payload) => {
		return payload.payload
	}
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 'Hello'
export default function greetingsAsyncReducer (state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type]

	return handler ? handler(state, action) : state
}
