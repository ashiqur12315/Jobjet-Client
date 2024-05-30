import { Link, useParams } from "react-router-dom";


const Payment = () => {
    const { tranId } = useParams()
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful!</h1>
                <p className="text-gray-700 text-2xl mb-2">Thank you for your payment. Your transaction was completed successfully.</p>
                <p className="text-gray-700 text-2xl mb-4 font-semibold">Transaction ID: {tranId}</p>
                <p className="text-gray-600 text-2xl mb-6">You will receive a confirmation email shortly.</p>
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

export default Payment;