import { docCollection } from "./mongo.js";

function findDoc(docName) {
    const document = docCollection.findOne({ name: docName })

    return document;
}

function updateDoc(docName, text) {
    const update = docCollection.updateOne({ name: docName }, { $set: { text } })

    return update
}

export { findDoc, updateDoc }
