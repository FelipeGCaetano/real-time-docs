import io from "./server.js";
import { findDoc, updateDoc, getAllDocs } from "./database/docsDb.js";

io.on("connection", (socket) => {
    socket.on("get_docs", async (giveDocsBack) => {
        const docs = await getAllDocs();
        
        giveDocsBack(docs);
    })

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
