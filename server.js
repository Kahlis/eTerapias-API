// server.js
import express from "express";
import { AccessToken } from "livekit-server-sdk";

const createToken = (req, res) => {
	console.log("Call");
	const name = req.params.name;
	const roomName = req.params.roomName;

	const at = new AccessToken("devkey", "secret", {
		identity: name,
	});

	at.addGrant({ roomJoin: true, room: roomName });

	const returning = {
		name: name,
		token: at.toJwt(),
	};

	return res.status(200).json(returning);
};

const app = express();
const port = 8080;

app.get("/auth/:name/:roomName", createToken);
app.get("/", (_, res) => res.status(204).json());

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
