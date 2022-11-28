import React from 'react'
import { Link } from 'react-router-dom';

const SingleOrder = ({ book, idx }) => {
    const { carName, resalePrice, img } = book;

    const handlePay = book => {
        console.log(book)
    }

    return (
        <tr>
            <th>{idx + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {carName}
            </td>
            <td>${resalePrice}</td>
            <th>
                {
                    book.resalePrice && !book.paid &&
                    <Link to={`/dashboard/allorders/${book._id}`}><button onClick={() => handlePay(book)} className="btn text-white btn-xs">Pay</button></Link>
                }
                {
                    book.resalePrice && book.paid &&
                    <button onClick={() => handlePay(book)} className="btn text-white btn-xs bg-green-600 border-0">Paid</button>
                }
            </th>
        </tr>
    )
}

export default SingleOrder