import { emitTextEditor, selectDocument } from "./socket-front-document.js";

const params = new URLSearchParams(window.location.search);
const docName = params.get("nome");

const textEditor = document.getElementById("editor-texto");
const docTitle = document.getElementById("titulo-documento");

docTitle.textContent = docName || "Documento sem título";

selectDocument(docName);

textEditor.addEventListener("keyup", () => {
    emitTextEditor(textEditor.value, docName);
});

export function updateTextEditor(text) {
    textEditor.value = text;
};