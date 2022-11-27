import React from 'react'

const ReportedItems = () => {

    const handleDelete = () => {

    }
    return (
        <div>
            <div className='mx-10'>
                <h3 className="text-3xl mb-6 mt-4">All Buyers</h3>


                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>name</td>
                            <td>Seller Name</td>
                            <td><button onClick={() => handleDelete()} className='btn bg-red-600 text-white border-none btn-xs'>Delete</button></td>

                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ReportedItems