import React from "react";
import { Pane } from 'evergreen-ui';

function Header() {
    return (
        <Pane display="flex" className='w-auto h-7 items-center flex-row border-box'>
            <Pane display="flex" className='h-full w-full text-2 font-semibold font-sans items-center border-box flex-grow flex-row'>
               <p>Quản lý cơ hội</p>
            </Pane>
            <Pane display="flex" className='w-60 h-full px-2 text-1 font-sans font-normal items-center border-box'>
                <p>nghiapd92</p>
            </Pane>
            <Pane display="block" className="h-auto max-w-full text-1 align-middle border-solid">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <circle cx="28" cy="28" r="28" fill="#F8F9FA"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9847 31.3462C24.1171 31.3462 20.8142 31.931 20.8142 34.2729C20.8142 36.6148 24.0961 37.2205 27.9847 37.2205C31.8523 37.2205 35.1542 36.6348 35.1542 34.2938C35.1542 31.9529 31.8733 31.3462 27.9847 31.3462Z" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9846 28.0059C30.5227 28.0059 32.5799 25.9478 32.5799 23.4097C32.5799 20.8716 30.5227 18.8145 27.9846 18.8145C25.4465 18.8145 23.3885 20.8716 23.3885 23.4097C23.3799 25.9392 25.4237 27.9973 27.9523 28.0059H27.9846Z" stroke="#CCCCCC" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Pane>
        </Pane>
    )
}

export default Header;