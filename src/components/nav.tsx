import { useState } from 'react';
import "../App.css"
import fx from '../images/fx.png'
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap px-6 py-3 border-b-2">
            <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
            <img src={fx} className="w-100 h-10 mr-2 filter-white-to-orange" alt="Logo" />
            <h1 className='font-bold text-[3vh] sm:text-[3vh] md:text-[3vh]'>FNAXIOM</h1>
            </div>
            <div className="block lg:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
                <svg
                className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                <svg
                className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
            </button>
            </div>
            <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
            >
            <div className="text-sm lg:flex-grow">
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold">
                HOME
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold">
                ABOUT
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold">
                ASSESSMENT TASKS
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold">
                CONTACT
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold">
                WORKS
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold">
                PROJECTS
                </a>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold">
                LOCATION
                </a>
                
            </div>
            <div>
                <div className="bg-orange-600 flex items-center justify-center font-medium text-[15px] sm:text-[15px] md:text-[15px] h-[35px] w-[130px] pb-[5px] lg:rounded-xl">
                    GET STARTED
                </div>
            </div>
            </div>
        </nav>
    );
}
