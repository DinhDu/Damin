import React from "react";
import Tchm from './tchm/tchm.js'
import Chdt from './chdt/chdt.js'
import { Pane } from 'evergreen-ui';


function View() {
    return (
        <Pane display="flex" className="h-auto w-auto pt-2 flex-col justify-between items-start border-box lg:flex-row">
            <Tchm />
            <Chdt />
        </Pane>
    );
}
export default View;