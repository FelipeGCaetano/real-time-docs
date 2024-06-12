import { updateTextEditor } from "./document.js";

const socket = io();

export function selectDocument(docName) {
    socket.emit("select_doc", docName, (text) => {
        updateTextEditor(text);        
    });
};

export function emitTextEditor(data) {
    socket.emit("text_editor", data);
};

socket.on("written_text", (text) => {
    updateTextEditor(text);
});
