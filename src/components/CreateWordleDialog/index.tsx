import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface IProps {
    open : boolean
    onClose: (arg: boolean) => void
}

export default function CreateWordle({ open } : React.PropsWithChildren<IProps>) {

    const cancelButtonRef = useRef(null)

    return (
        <>tsetes</>
    )
}