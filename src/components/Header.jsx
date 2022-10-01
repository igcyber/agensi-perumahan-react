import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.pathname);
    function getPath(route){
        if(route === location.pathname){
            return true;
        }
    }
    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <img src="././images/logo-sm.png" alt="logo" className='h-12 cursor-pointer' onClick={()=>navigate("/")} />
                </div>
                <div>
                    <ul className='flex space-x-10 '>
                        <li className={`cursor-pointer py-5 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${getPath("/") && "text-black border-b-orange-500"}`} onClick={()=>navigate("/")} >HOME</li>
                        <li className={`cursor-pointer py-5 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${getPath("/offers") && "text-black border-b-orange-500"}`} onClick={()=>navigate("/offers")} >OFFERS</li>
                        <li className={`cursor-pointer py-5 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${getPath("/sign-in") && "text-black border-b-orange-500"}`} onClick={()=>navigate("/sign-in")} >SIGN IN</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
