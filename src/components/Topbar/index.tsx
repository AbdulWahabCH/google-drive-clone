import React from 'react'
import useFetchSession from '@/Hooks/useFetchSession'
import Button from '@/components/common/Button'
import { signIn, signOut } from "next-auth/react"
import styles from './ToolBar.module.scss'
import UploadButton from '@/components/uploadFiles/index'

export default function index() {
    let { session } = useFetchSession()
    let image = session?.user.image;
    return (
        <div>
            <UploadButton/>
            <div className='flex flex-row'>
                {session ? <img onClick={() => signOut()} className='w-11 h-11 cursor-pointer rounded-md' src={image as string} /> : <Button inputs="sign In" clickable={signIn} clsnm='btn-primary' />}
            </div>
        </div>


    )
}
