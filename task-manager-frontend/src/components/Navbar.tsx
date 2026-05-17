import { RectangleStackIcon } from "@heroicons/react/24/outline"

const navLinkClass: string = "";

const Navbar: React.FC = () => {
    return(
        <div>
            <aside className="m-4 w-64 min-h-[calc(100vh-2rem)] bg-white/10 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden px-4 lg:px-6 py-2.5 rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none"></div>
                <div className=" flex flex-col items-center justify-between mx-auto">
                <div className="flex items-center">
                    <RectangleStackIcon className="mr-3 h-6 w-6" />
                    <span className="self-center text-xl font-semibold font-main whitespace-nowrap text-gray-900">
                    Task Manager
                    </span>
                </div>
                <div className="flex items-center w-auto">
                    <ul className='flex flex-col items-center font-medium space-x-8'>
                    <li>
                        <a href="/" className={navLinkClass}>
                        Home
                        </a>
                    </li>
                    <li>
                        <a href="/" className={navLinkClass}>
                        Tasks
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                        <a href="/" className="inline-flex items-center justify-end text-white bg-violet-300 hover:bg-violet-400 focus:ring-4 focus:ring-violet-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none focus: ring-offset-2">
                        Log in
                        </a>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
          </aside>
        </div>
    )
};

export default Navbar;