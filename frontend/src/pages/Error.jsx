import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    const error = useRouteError();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 text-center">
                <h1 className="mb-4 text-6xl font-extrabold text-red-600">
                    {error.status}
                </h1>
                <h2 className="mb-2 text-3xl font-bold text-gray-900">
                    Oops! {error.statusText}
                </h2>
                <p className="mb-8 text-xl text-gray-600">{error.error.message}</p>
                <button
                    onClick={() => navigate(-1)}
                    className="inline-block px-4 py-2 mr-5 font-bold text-white transition duration-300 ease-in-out bg-blue-600 rounded hover:bg-blue-700"
                    aria-label="Go back to the previous page"
                >
                    Go back
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="inline-block px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-blue-600 rounded hover:bg-blue-700"
                    aria-label="Go back to the previous page"
                >
                    Get Help
                </button>
            </div>
        </div>
    );
}

export default Error;
