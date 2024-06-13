import io from "./server.js";
import { findDoc, updateDoc } from "./database/docsDb.js";

io.on("connection", (socket) => {
    console.log(`Client connected. ID: ${socket.id}`);

    socket.on("select_doc", async (docName, giveTextBack) => {
        socket.join(docName);

        const doc = await findDoc(docName);

        if(doc) {
            giveTextBack(doc.text);
        };

    });

    socket.on("text_editor", async ({text, docName}) => {
        const update = await updateDoc(docName, text);

        if(update.modifiedCount) {
            socket.to(docName).emit("written_text", text);
        };
    });
});
