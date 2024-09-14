import * as ImagePicker from 'expo-image-picker'
import { Platform } from 'react-native'


export async function InitializeImagePicker() {
    if (Platform.OS !== "web") {
        const { status } = await ImagePicker.getMediaLibraryPermissionsAsync()
        if (status !== "granted") alert("Noted needs camera roll permission to add images.")
    }
}

export function GetBlobFromURI(uri: string) {
    const blob = new Promise<Blob>((res, rej) => {
        const xhr = new XMLHttpRequest()
        xhr.onload = function () {
            res(xhr.response)
        }
        xhr.onerror = function (e) {
            console.log(e)
            rej(new TypeError("Network request failed"))
        }
        xhr.responseType = "blob"
        xhr.open("GET", uri, true)
        xhr.send(null)
    })

    return blob
}


export async function GetURIFromMediaLibrary(): Promise<{ fileName: string | null | undefined, uri: string } | undefined> {
    const image = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: false
    })
    if (!image.canceled) return { fileName: image.assets[0].fileName, uri: image.assets[0].uri }
}