import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { IoIosCopy, IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Code = ({ code, language }) => {
    const [copied, setCopied] = useState(false)
    const notify = () => {
        toast(<ToastDisplay className='bg-neutral-700 m-2' />)
        copy()
    }

    function ToastDisplay() {
        return (
            <div className='m-2'>
                <p className='text-md'>Copied to clipboard !</p>
            </div>
        )
    };
    const copy = () => {
        console.log('Copied!')
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 5000)
    }

    return (
        <>
            <div className="relative">
                <button
                    className="absolute cursor-default flex flex-row justify-center items-center top-0 right-0 p-2 pt-1 text-teal-500">
                    <span className='mr-1 basis-3/4 text-md'>{language}</span>
                    <CopyToClipboard text={code}
                        onCopy={(copied) => notify()}>
                        {copied
                            ? <IoIosCheckmarkCircleOutline className="text-3xl text-blue-500 basis-1/4" />
                            : <IoIosCopy className="text-3xl basis-1/4 cursor-pointer hover:text-white" />}

                    </CopyToClipboard>

                </button>
                <SyntaxHighlighter
                    className=''
                    language={language}
                    style={vs2015}
                    wrapLines={true}
                    wrapLongLines={true}
                    showLineNumbers={false}
                    showInlineLineNumbers={false}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </>
    )
}

export default Code