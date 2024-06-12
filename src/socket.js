import io from "./server.js";

const documents = [
    {
        name: "JavaScript",
        text: "Texto de JavaScript"
    },
    {
        name: "Node",
        text: "Texto de node"
    },
    {
        name: "Socket.io",
        text: "Texto de socket.io"
    }
];

io.on("connection", (socket) => {
    console.log(`Client connected. ID: ${socket.id}`);

    socket.on("select_doc", (docName, giveTextBack) => {
        socket.join(docName);
        const doc = findDoc(docName);

        if(doc) {
            giveTextBack(doc.text);
        };

    });

    socket.on("text_editor", ({text, docName}) => {
        const doc = findDoc(docName);

        if(doc) {
            doc.text = text;
        
            socket.to(docName).emit("written_text", text);
        };
    });
});

function findDoc(docName) {
    const document = documents.find((document) => {
        return document.name === docName;
    });

    return document;
}