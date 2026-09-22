import { server as wisp } from "@mercuryworkshop/wisp-js/server";
import express from "express";

const app = express();
const port = process.env.PORT || 10000;

app.use(express.static("./"));

const server = app.listen(port, () => {
    console.log("WISP Server listening on port: ", port);
});

// Intercepts network requests from GUST and tunnels them
server.on("upgrade", (request, socket, head) => {
    wisp.routeRequest(request, socket, head);
});
