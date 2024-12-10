import React from 'react'

function UserSettings() {
    return (
        <div className="min-h-screen p-4 md:p-8 bg-white dark:bg-[#383838] text-gray-800 dark:text-white">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold md:text-3xl">User Settings</h1>
                </div>

                <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-700">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="block font-medium">Profile Picture</label>
                            <div className="flex items-center space-x-4">
                                <div className="w-20 h-20 rounded-full bg-[#e97730]"></div>
                                <button className="px-4 py-2 rounded-lg bg-[#e97730] text-white hover:opacity-90 transition-opacity">
                                    Change Photo
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block font-medium">Full Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block font-medium">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg dark:bg-gray-600 dark:border-gray-500"
                                placeholder="Enter new password"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block font-medium">Notifications</label>
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" className="w-4 h-4 accent-[#e97730]" />
                                <span>Enable email notifications</span>
                            </div>
                        </div>

                        <button className="w-full px-4 py-2 rounded-lg bg-[#e97730] text-white hover:opacity-90 transition-opacity">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSettings