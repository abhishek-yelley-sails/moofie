import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from "prop-types";

const ImageModal = forwardRef( function ImageModal({ src , title }, ref) {
    const dialogRef = useRef(null);
    useImperativeHandle(ref, () => ({
        open () {
            dialogRef.current.showModal();
        }
    }))
    return createPortal(
        <dialog ref={dialogRef} className="ImageModal">
            <h1 className='MovieHeading' style={{margin: "10px"}}>{title}</h1>
            <img src={src} alt={title + " image modal"} />
            <form method="dialog" style={{display: "flex", justifyContent: "center"}}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("image-modal")
    );
});

export default ImageModal;

ImageModal.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
}