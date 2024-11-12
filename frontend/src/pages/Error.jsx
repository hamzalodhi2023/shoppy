import { useNavigate, useRouteError } from "react-router-dom";
import { Button1, Button2 } from "../components/layout/ui/Button";

function Error() {
    const navigate = useNavigate();
    const error = useRouteError();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 text-center">
                <h1 className="mb-4 text-9xl font-semibold text-[#e97730]">
                    {error.status}
                </h1>
                <h2 className="mb-2 text-5xl font-bold text-[#383838]">
                    Oops! {error.statusText}
                </h2>
                <p className="mb-8 text-xl text-gray-600">{error.error.message}</p>
                <span className="flex items-center justify-center gap-5">
                    <Button2 text={"Go Back"} onclick={() => navigate(-1)} />
                    <Button1 text={"Get Help"} onclick={() => navigate("/contact")} />
                </span>
            </div>
        </div>
    );
}

export default Error;
