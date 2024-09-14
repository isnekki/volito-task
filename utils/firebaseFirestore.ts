import { app } from '@/firebaseConfig'
import { addDoc, deleteDoc, setDoc, doc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { NoteProps } from '@/app/(app)/new-note'
import { getCurrentUserUID } from './fierbaseAuth'

const db = getFirestore(app)

export async function uploadToFirestore(note: NoteProps) {
    console.log("Uploading note: ", note)
    const uid = getCurrentUserUID()
    if (!uid) return
    try {
        const docRef = await addDoc(collection(db, "notes"), {
            uid,
            title: note.title,
            body: note.body,
            location: JSON.stringify(note.location),
            color: note.color || "transparent",
            date: note.date.toUTCString()
        })
        console.log("Document ID: ", docRef.id)
    } catch (e) {
        console.error("Error uploading document: ", e)
    }
}

export async function getNotes() {
    const uid = getCurrentUserUID()
    if (!uid) return;
    const q = query(collection(db, "notes"), where("uid", "==", uid))

    const querySnapshot = await getDocs(q)
    return querySnapshot
}

export async function updateNote(newNote: NoteProps) {
    await setDoc(doc(db, "notes", newNote.id), {
        title: newNote.title,
        body: newNote.body,
        location: JSON.stringify(newNote.location),
        color: newNote.color || "#FFFFFF",
        date: newNote.date.toUTCString()
    }, { merge: true })
}

export async function deleteNote(note: NoteProps) {
    await deleteDoc(doc(db, "notes", note.id))
}