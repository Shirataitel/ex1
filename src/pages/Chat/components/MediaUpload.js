import React from 'react';
import "./MediaUpload.css"
import { useRef, useState } from "react";


function MediaUpload() {

    const fileRef = useRef();

    const handleChange = (e) => {
        const [file] = e.target.files;
        console.log(file);
    };

    function hideMenu(){
        let mediaUpload = document.getElementById('mediaUpload');
        mediaUpload.style.visibility = 'hidden';
    }

    return (
        <div>
            <input
                ref={fileRef}
                onChange={handleChange}
                multiple={false}
                type="file"
                hidden
                onClick={hideMenu}
            />

            <ul className="list-group mediaButtonsBar" id="mediaUpload">
                <li className="list-group-item uploadButton camera" onClick={() => fileRef.current.click()}>
                    <i className="bi bi-camera-fill"></i>
                </li>
                <li className="list-group-item uploadButton video" onClick={() => fileRef.current.click()}>
                    <i class="bi bi-camera-reels-fill"></i>
                </li>
                <li className="list-group-item uploadButton record">
                    <i class="bi bi-mic-fill"></i>
                </li>
            </ul>


        </div>
    );
}

export default MediaUpload;
