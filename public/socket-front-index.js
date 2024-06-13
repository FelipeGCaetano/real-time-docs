import { insertDocLink } from "./index.js";

const socket = io();

socket.emit("get_docs", (docs) => {
    docs.forEach((doc) => {
        insertDocLink(doc.name);
    });
});