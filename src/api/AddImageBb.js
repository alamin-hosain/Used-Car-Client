import React, { useEffect } from 'react'

const AddImageBb = (image) => {
    const imagebbkey = process.env.REACT_APP_Image_Key;

    useEffect(() => {
        fetch(`https://api.imgbb.com/1/upload?key=${imagebbkey}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: { image }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [image, imagebbkey])

}

export default AddImageBb