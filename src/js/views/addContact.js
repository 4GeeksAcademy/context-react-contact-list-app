import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/addContact.css";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store } = useContext(Context)

	return (
		<div>
			Hello AddContact
			<Link to="/"></Link>
		</div>
	);
};
