import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { app } from '@/firebaseConfig'
import { getCurrentUserUID } from './fierbaseAuth'

const storage = getStorage(app)

export async function firebaseUpload(blob: Blob, fileName: string, callback: (downloadURL: string) => void) {
    const uid = getCurrentUserUID()
    if (!uid) return

    const storageRef = ref(storage, `/images/${uid}/${fileName}`)
    const uploadTask = uploadBytesResumable(storageRef, blob)
    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(`Upload is ${progress}% done`)
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused')
                    break
                case 'canceled':
                    console.log('Upload is cancelled')
                    break
                case 'success':
                    console.log('Upload is complete')
                case 'error':
                    console.error('Error uploading image')
            }
        },
        (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                    console.log('User unauthorized')
                    break;
                case 'storage/canceled':
                    console.error('Error: Upload cancelled')
                    break;          
                case 'storage/unknown':
                    console.error('Storage not found')
                    break;
            }
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then(callback)
        }
    )
}


