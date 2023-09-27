import React, { useState,ChangeEvent } from 'react'
import Button from '@/components/common/Button'
import {fileUpload} from '@/API/FileUpload'


export default function index() {
    let [file, setFile] = useState(null);
    let [isFileVisible, setFileVisible] = useState(true);
    const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
        //console.log(file);
        let file = e.target.files?.[0]
        fileUpload(file);
        console.log(file);
    }

    return (
        <>
            <div className='flex flex-row gap-3 '>
                <Button clickable={() => {setFileVisible(!isFileVisible)}} clsnm='btn-primary' inputs="Add a File" />
                {isFileVisible ? <input onChange={(e) => uploadFile(e)} type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" /> : <></>}
                <Button clsnm='btn-accent' inputs='Create a Folder' />
            </div>
        </>
    )
}
