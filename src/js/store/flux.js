export default {
 ACTIONS: { ADD:{type: "add"}, DELETE:{type: "delete"}, EDIT:{type: "edit"}, RETRIEVE_FROM_CLOUD:{type: "get"}, UPDATE_CLOUD:{type: "put"}},

 storeReducer: (contactsInReducer, operationInReducer) => {
	switch(operationInReducer.type){
		case "add":
		break;
		case "delete":
		break;
		case "edit":
		break;
		case "get":
		break;
		case "put":
		break;
	}
}
}

/*
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
					//fetch().then().then(data => setStore({ "foo": data.bar }))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};
*/