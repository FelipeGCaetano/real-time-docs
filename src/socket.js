import io from "./server.js";

io.on("connection", (socket) => {
    console.log(`Client connected. ID: ${socket.id}`);

    socket.on("select_doc", (docName) => {
        socket.join(docName);
    });

    socket.on("text_editor", (text, docName) => {
        socket.to(docName).emit("written_text", text);
    });
});
