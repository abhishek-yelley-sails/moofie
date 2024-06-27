import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../components/UserContextProvider';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function Profile() {
    const [file, setFile] = useState();
    const [preview, setPreview] = useState();
    const ctxValue = useContext(UserContext);

    useEffect(() => {
        if (!file) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    function handleFileChange(e) {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    // function handleSend(newImage) {
    //     ctxValue.changeImage(newImage);
    //     setPreview(undefined);
    // }
    function handleSend() {
        const reader = new FileReader();
        reader.onloadend = () => {
            // convert file to base64 String
            const base64String = reader.result
                .replace("data:", "")
                .replace(/^.+,/, "");
            // store file
            try {
                const users = JSON.parse(localStorage.getItem("users") || "[]");
                const currentUser = users.find(user => user.email === ctxValue.email);
                const allUsersExceptCurrent = users.filter(user => user.email !== ctxValue.email);
                currentUser.image = `data:image/png;base64,${base64String}`;

                ctxValue.changeImage(currentUser.image);
                setPreview(undefined);

                localStorage.setItem("users", JSON.stringify([...allUsersExceptCurrent, currentUser]));
            }
            catch (e) {
                console.log(e)
            }
        };
        reader.readAsDataURL(file);
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>

            <h1 style={{ alignSelf: "center", marginBottom: "0px" }}>Hello, {ctxValue.name}!</h1>
            <p style={{ alignSelf: "center" }}><i>{ctxValue.email}</i></p>

            <section style={{ display: "flex", flexDirection: "column" }}>
                <h2 style={{ alignSelf: "center" }}>Edit Profile Image</h2>
                <Button
                    style={{ alignSelf: "center" }}
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload file
                    <VisuallyHiddenInput type="file" accept="image/*" onChange={handleFileChange} />
                </Button>
                <br />
                {preview ?
                    <>
                        <img
                            src={preview}
                            alt="Preview Image"
                            className="img-preview"
                        />
                        <br />
                        <Button
                            style={{ alignSelf: "center" }}
                            variant="contained"
                            endIcon={<SendIcon />}
                            onClick={handleSend}
                        >
                            Send
                        </Button>
                    </>
                    :
                    <img
                        src={ctxValue.image}
                        alt="Preview Image"
                        className="img-preview"
                    />
                }
            </section>
        </div>
    );
}
