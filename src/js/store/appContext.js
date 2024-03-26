import React, { useEffect, useReducer } from "react";
import functions from "./flux.js";


export const Context = React.createContext(null);


const addStore = MyAppWityhoutContext => {

	const ContextGiver = props => {

		const [ contactsInContext, proceduresInContext] = useReducer(functions.storeReducer, {})
		

		useEffect(() => {
			proceduresInContext(ACTIONS.RETRIEVE_FROM_CLOUD)
		}, []);

		return (
			<Context.Provider value={{contactsInContext, proceduresInContext, actions}}>
				<MyAppWityhoutContext {...props} />
			</Context.Provider>
		);
	};

	return ContextGiver;

};

export default addStore;
