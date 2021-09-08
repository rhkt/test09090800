import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Button, Divider } from "@material-ui/core";

class Game extends React.Component {
	render() {
		return (
			<div>
				<h1>ハローワールド</h1>
				<Button size="small" variant="contained" color="primary">
					全てを見る
				</Button>
			</div>
		);
	}
}

ReactDOM.render(<Game />, document.getElementById("root"));
