import { Button1 } from "../components/layout/ui/Button"
import Title from "../components/layout/ui/Title"

function Contact() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#383838] flex items-center justify-center px-4 py-8">
            <div className="max-w-3xl w-full bg-gray-100 dark:bg-[#2a2a2a] rounded-lg shadow-lg p-6 md:p-8">
                <Title text1={"CONTACT"} text2={"US"} />
                <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-gray-800 dark:text-gray-200">First Name</label>
                            <input
                                type="text"
                                className="w-full bg-white px-4 py-2 rounded-lg border dark:border-gray-600 focus:outline-none focus:border-[#e97730] dark:bg-[#383838] dark:text-gray-200"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-800 dark:text-gray-200">Last Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 bg-white rounded-lg border dark:border-gray-600 focus:outline-none focus:border-[#e97730] dark:bg-[#383838] dark:text-gray-200"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-800 dark:text-gray-200">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 bg-white rounded-lg border dark:border-gray-600 focus:outline-none focus:border-[#e97730] dark:bg-[#383838] dark:text-gray-200"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-800 dark:text-gray-200">Message</label>
                        <textarea
                            rows="4"
                            className="w-full px-4 py-2 rounded-lg bg-white border dark:border-gray-600 focus:outline-none focus:border-[#e97730] dark:bg-[#383838] dark:text-gray-200"
                        ></textarea>
                    </div>
                    <Button1 text={"Send Message"} />
                </form>
            </div>
        </div>
    )
}

export default Contact