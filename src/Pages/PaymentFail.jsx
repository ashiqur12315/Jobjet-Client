import { Link, useParams } from "react-router-dom";


const PaymentFail = () => {
    const { tranId } = useParams()
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Failed</h1>
                <p className="text-gray-700 mb-2 text-2xl">Unfortunately, your payment could not be processed at this time.</p>
                <p className="text-gray-700 mb-4 text-2xl font-semibold">Failed Transaction ID: {tranId}</p>
                <p className="text-gray-600 mb-6 text-2xl">Please try again later or contact support for assistance.</p>
                <Link to='/myJobs'>
                <button
                    
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                >
                    Go to my posted/added jobs
                </button></Link>
            </div>
        </div>
    );
};

export default PaymentFail;