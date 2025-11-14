import Link from "next/link";


const login = () => {
    return (
        <div className="grid place-items-center h-screen ">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-black-400"> 
                <h1 className="text-xl font-bold my-4">Login to Your Account</h1>
                <form className="flex flex-col gap-3">
                    <input type="email" placeholder="Email" className="border p-2 rounded w-80 mb-4"/>
                    <input type="password" placeholder="Password" className="border p-2 rounded w-80 mb-4"/>
                    <button type="submit" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-80 cursor-pointer">Login</button>
                    <div className="bg-red-500 text-white rounded w-fit text-sm py-1 px-3 rounded-mdmt-2">error message
                    </div>
                    <p className="text-sm mt-2 text-right">Don't have an account? <Link href="/signup" className="text-blue-500 underline">Register</Link></p>
            
                </form>
            </div>

        </div>
    )
}

export default login;