import io from "./server.js";

io.on("connection", (socket) => {
    console.log(`Client connected. ID: ${socket.id}`);

    socket.on("text_editor", (text) => {
        console.log(text);
    });
});
