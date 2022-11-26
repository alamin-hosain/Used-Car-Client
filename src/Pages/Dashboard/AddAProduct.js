import React, { useContext, useState } from 'react'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { AuthContext } from '../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddAProduct = () => {
    const { user } = useContext(AuthContext);
    const [selectDate, setSelectDate] = useState(new Date());
    const postedDate = format(selectDate, 'PP');
    const navigate = useNavigate();
    const imagebbkey = process.env.REACT_APP_Image_Key;

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const originalPrice = event.target.originalPrice.value;
        const resalePrice = event.target.resalePrice.value;
        const quality = event.target.quality.value;
        const phone = event.target.phone.value;
        const location = event.target.location.value;
        const description = event.target.description.value;
        const YearsOfUse = event.target.usedOfYear.value;
        const postedTime = postedDate;
        const imageUpload = event.target.image.files[0];
        const sellersName = user.displayName;
        const category = event.target.category.value;
        let categoryId = '';

        if (category === 'Honda Grace') {
            categoryId = 1;
        } else if (category === 'Nissan') {
            categoryId = 2;
        } else {
            categoryId = 3;
        }


        const formData = new FormData();
        formData.append('image', imageUpload);
        fetch(`https://api.imgbb.com/1/upload?key=${imagebbkey}`, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(data => {
                const img = data.data.url;
                const products = {
                    name,
                    originalPrice,
                    resalePrice,
                    quality,
                    phone,
                    location,
                    description,
                    YearsOfUse,
                    postedTime,
                    img,
                    sellersName,
                    email: user.email,
                    category,
                    categoryId
                }

                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(products)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            event.target.reset();
                        }

                    })

                toast.success('Product Added Successfully');
                navigate('/dashboard/myproduct');
            })







    }


    return (
        <div className='pb-10'>
            <h3 className="text-3xl ml-4 mb-6 text-center mt-4">Add a Product</h3>
            <form className='flex flex-col justify-center items-center space-y-4 px-10 md:px-0' onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder="Product Name" className="input input-bordered w-full max-w-md" />

                <input type="text" name='originalPrice' placeholder="Original Price $" className="input input-bordered w-full max-w-md" />
                <input type="text" name='resalePrice' placeholder="Resale Price $" className="input input-bordered w-full max-w-md" />

                <div className='w-full max-w-md'>
                    <label>Select Product Quality</label>
                    <select className="select select-bordered w-full max-w-md mt-2" name='quality'>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>


                <input type="text" name='phone' placeholder="Mobile Number" className="input input-bordered w-full max-w-md" />

                <input type="text" name='location' placeholder="Enter Your Location. Ex: Dhaka, Khulna" className="input input-bordered w-full max-w-md" />


                <div className='w-full max-w-md'>
                    <label>Select Product Category</label>
                    <select className="select select-bordered w-full max-w-md mt-2" name='category'>
                        <option>Honda Grace</option>
                        <option>Nissan</option>
                        <option>Toyota</option>
                    </select>
                </div>

                <textarea name='description' className="textarea textarea-bordered w-full max-w-md" placeholder="Product Description"></textarea>

                <input type="text" name='usedOfYear' placeholder="Used Year. Ex: 2" className="input input-bordered w-full max-w-md" />

                <div className='border p-6 text-center'>
                    <label className='text-center font-semibold text-lg border-b-2 py-2'>Select Date of Posting</label>
                    <DayPicker
                        mode="single"
                        selected={selectDate}
                        onSelect={setSelectDate}
                    />
                </div>


                <div>
                    <label className='text-bold'>Choose Car Image</label>
                    <input type="file" name='image' className="file-input file-input-bordered w-full max-w-md mt-2 mb-10" />
                </div>

                <input type="submit" className='btn w-full max-w-lg text-white' value="Submit" />

            </form>
        </div>
    )
}

export default AddAProduct