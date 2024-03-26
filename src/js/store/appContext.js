import React, { useEffect, useReducer } from "react";
import functions from "./flux.js";


export const Context = React.createContext(null);


const addStore = MyAppWityhoutContext => {

	const ContextGiver = props => {

		const [ contactsInContext, proceduresInContext] = useReducer(functions.storeReducer, {})
		

		useEffect(() => {
			//update contacts from cloud
			proceduresInContext(ACTIONS.RETRIEVE_FROM_CLOUD)
		}, []);

/*
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);
		*/


		return (
			<Context.Provider value={{contactsInContext, proceduresInContext, actions}}>
				<MyAppWityhoutContext {...props} />
			</Context.Provider>
		);
	};

	return ContextGiver;

};

export default addStore;
