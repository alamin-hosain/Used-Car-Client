import { useQuery } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast';

const ReportedItems = () => {

    const { data: reports = [], refetch } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/report');
            const data = await res.json();
            return data;
        }
    })



    const handleReportDelete = (report) => {
        fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/report/${report?._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    toast.success('Deleted Successfully')
                }
            })
    }


    const handleReportProductDelete = report => {
        fetch(`https://b612-used-products-resale-server-side-alamin-hosain.vercel.app/products/${report?._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    toast.success('Deleted Successfully')
                }
            })
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
                            <th>Seller Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports &&
                            reports?.map(report =>

                                <tr key={report._id}>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={report.img} alt='' />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{report.name}</td>
                                    <td>{report.sellersName}</td>
                                    <td><button onClick={() => handleReportDelete(report)} className='btn bg-red-600 text-white border-none btn-xs'>Delete</button></td>


                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ReportedItems