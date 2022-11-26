import React from 'react'

const SingleOrder = ({ book, idx }) => {
    const { carName, resalePrice, img } = book;

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
                <button className="btn text-white btn-xs">Pay</button>
            </th>
        </tr>
    )
}

export default SingleOrder