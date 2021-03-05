import React from 'react';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import {host} from "./Admin/apiAdmin";
import {api_location} from "../ajax";

function DropZone({path, children, onUpload}) {
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: 'image/jpeg, image/png, image/jpg',
        onDropAccepted: files => fileUpload(files[0])
    });
    const fileUpload = (file) => {
        const fd = new FormData();
        fd.append('image', file, file.name);
        const filename = file.name.replace(/ /gi, "-").replace(/\.[0-9a-z]+$/i, "") + "-" + new Date().getTime() + "" + file.name.match(/\.[0-9a-z]+$/i)[0];
        fd.append('path', path + "/" + filename);
        axios.post(host.uri + '/adminapi/upload_picture.php', fd)
            .then(res=>
            {
                if (res.data.ok) {
                    onUpload(filename)
                }
            }
        );

    }
    return (
        <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                {children}
            </div>
        </section>
    );
}

export default DropZone
