import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Button, Divider } from "@material-ui/core";

class Game extends React.Component {
	render() {
		return (
			<div>
				<p>ｄｅｖルド</p>
				<h1>ハローワールド</h1>
				<h2>ハローワールドディべろっぷの修正</h2>
				<h3>developハローワールドディべろっぷの修正</h3>
				<h4>masterの修正</h4>
				<Button size="small" variant="contained" color="primary">
					全てを見る
				</Button>
			</div>
		);
	}
}

ReactDOM.render(<Game />, document.getElementById("root"));
