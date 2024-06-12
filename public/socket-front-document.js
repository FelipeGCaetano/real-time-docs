import { updateTextEditor } from "./document.js";

const socket = io();

export function selectDocument(docName) {
    socket.emit("select_doc", docName);
};

export function emitTextEditor(text, docName) {
    socket.emit("text_editor", text, docName);
};

socket.on("written_text", (text) => {
    updateTextEditor(text);
});