import { database, app, storage } from '../../firebaseConfig';
import { NextApiRequest, NextApiResponse } from 'next';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export const fileUpload = (file: any) => {
    const storageRef = ref(storage, `file/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(progress);

    }, (err) => alert(err), () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadedUrl) => {
            // res.status(201).json(downloadedUrl)
            console.log(downloadedUrl)
        })
    })
}
