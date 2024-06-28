import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function RTE({
    name ,
    label ,
    control ,
    defaultValue = ""
}) {


  return (
    <div className=''>
        {label && <label>{label}</label> }
        <Controller 
        name = {name || 'content'}
        control={control}
        render={({field : {onChange} })=>(
            <Editor 
            apiKey='86jc8snqxi3h59gqkqxoj7qgdwkv2jta34jf66hziytbq2hn'
            initialValue={defaultValue}
            init={
                {
                    height :500 ,
                    menu: {
                        file: { title: 'File', items: 'newdocument' },
                        edit: { title: 'Edit', items: 'undo redo' },
                        view: { title: 'View', items: 'visualaid' }
                        // Define other menu items as needed
                    },
                    plugins : [
                        "image",
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'charmap',
                       
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'insertdatetime',
                        'media'
                    ],
                    toolbar:'undo redo | formatblock | image | bold italic | forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify  | bullist numlist outdent indent | removeformat | help ',
                    content_style: 'body { font-family:helvetica, Arial , sans-serif; font-size:14px }'
                    

                }
                
            }
            onEditorChange={onChange}
            />
        )}
        / >
    </div>
  )


}

export default RTE