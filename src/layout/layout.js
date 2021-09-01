import React from 'react';
import Sidebar from '../sidebar/sidebar.js'
import Header from '../header/header.js'
import View from '../View/view.js'
import { Pane } from 'evergreen-ui';

function Layout() {
  return (
    <Pane>
      <Sidebar />
      <Pane display="flex" className='h-full w-auto flex-col border-box ml-9 w-auto px-4 py-2'>
        <Header />
        <View />
      </Pane>
    </Pane>
  );    
}

export default Layout;