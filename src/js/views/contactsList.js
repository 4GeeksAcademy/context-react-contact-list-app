import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/contactList.css";
import { Context } from "../store/appContext";

export const ContactList = () => {
	const { store } = useContext(Context);

	return (
		<div>
			Hello addContacts
			<Link to="/addContact"></Link>
		</div>
	);
};
