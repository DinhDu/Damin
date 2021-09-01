import React from "react";
import Data from './Table.js'
import { Pane, SearchInput } from 'evergreen-ui';


function View() {
    return (
        <Pane display='flex' className="w-full h-full p-3  rounded-md box-border flex-col flex-grow shadow lg:w-500 lg:mb-auto">
            <Pane display='flex' className='justify-between'>
                <Pane className="pb-4 tracking-wides leading-24 text-2 font-semibold font-sans border-box">
                    Cơ hội đã tạo
                </Pane>
                <Pane>
                    <SearchInput placeholder="Tìm kiếm" />
                </Pane>
            </Pane>
            <Data/>
        </Pane>
    );
}
export default View;