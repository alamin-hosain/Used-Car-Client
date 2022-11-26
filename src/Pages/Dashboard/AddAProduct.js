import React from 'react'

const AddAProduct = () => {
    return (
        <div>
            <h3 className="text-3xl ml-4 mb-6 text-center mt-4">Add a Product</h3>
            <form className='flex flex-col justify-center items-center space-y-4'>
                <input type="text" name='name' placeholder="Product Name" className="input input-bordered w-full max-w-md" />

                <input type="text" name='originalPrice' placeholder="Original Price $" className="input input-bordered w-full max-w-md" />
                <input type="text" name='resalePrice' placeholder="Resale Price $" className="input input-bordered w-full max-w-md" />

                <div className='w-full max-w-md'>
                    <label>Select Product Quality</label>
                    <select className="select select-bordered w-full max-w-md mt-2">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>


                <input type="text" placeholder="Mobile Number" className="input input-bordered w-full max-w-md" />

                <input type="text" placeholder="Enter Your Location. Ex: Dhaka, Khulna" className="input input-bordered w-full max-w-md" />

                <textarea className="textarea textarea-bordered w-full max-w-md" placeholder="Product Description"></textarea>

                <input type="text" placeholder="Used Year. Ex: 2" className="input input-bordered w-full max-w-md" />

            </form>
        </div>
    )
}

export default AddAProduct