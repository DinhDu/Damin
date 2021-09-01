import React from 'react';
import { Pane, Button } from 'evergreen-ui';
import 'rsuite/dist/styles/rsuite-default.css';
import { CheckPicker } from 'rsuite'


function Tchm() {
    return (
        <Pane display='flex' className="w-full h-full p-3 mr-4 mb-4 rounded-md box-border flex-col flex-grow shadow lg:w-300 lg:mb-auto">
            <Pane className="pb-4 tracking-wides leading-24 text-2 font-semibold font-sans border-box">
                Tạo cơ hội mới
            </Pane>
            <Pane display="flex" className='h-7 w-full py-1 px-3 mb-2 rounded-md text-1 flex-col box-border bg-gray-50'>
                <Pane>
                    Số điện thoại
                </Pane>
                <Pane>
                    <input className='h-full w-full bg-gray-50 outline-none text-sm' type="text" />
                </Pane>
            </Pane>
            <Pane display="flex" className='h-7 w-full mb-2 flex-row border-box'>
                <Pane display="flex" className='h-7 w-full py-1 px-3 mb-2 rounded-md text-1 flex-col box-border bg-gray-50'>
                    <Pane>
                        Tên khách hàng
                    </Pane>
                    <Pane>
                        <input className='h-full w-full bg-gray-50 outline-none text-sm' type="text" />
                    </Pane>
                </Pane>
                <Pane display="flex" className='h-7 w-200 py-1 px-3 mb-2 ml-2 rounded-md text-1 flex-col box-border bg-gray-50'>
                    <Pane>
                        Giới tính
                    </Pane>
                    <Pane>
                        <select className='h-full w-full bg-gray-50 outline-none text-sm'>
                            <option value="Chọn giới tính">Chọn giới tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                            <option value="Giới tính thứ 3">Giới tính thứ 3</option>
                        </select>
                    </Pane>
                </Pane>
            </Pane>
            <Pane display="flex" className='h-7 w-full py-1 px-3 mb-2 rounded-md text-1 flex-col box-border bg-gray-50'>
                <Pane>
                    Địa chỉ
                </Pane>
                <Pane>
                    <input className='h-full w-full bg-gray-50 outline-none text-sm' type="text" />
                </Pane>
            </Pane>
            <Pane display="flex" className='h-7 w-full mb-2 justify-center items-center rounded-md text-1 box-border bg-gray-50'>
                    <CheckPicker data={[
                        {
                            label: 'Nâng ngực',
                            value: 'Nâng ngực'
                        },
                        {
                            label: 'Tắm trắng',
                            value: 'Tắm trắng'
                        },
                        {
                            label: 'Triệt lông',
                            value: 'Triệt lông'
                        },
                        {
                            label: 'Triệt lông mũi',
                            value: 'Triệt lông mũi'
                        },
                        {
                            label: 'Triệt lông nách',
                            value: 'Triệt lông nách'
                        },
                        {
                            label: 'Năng mí',
                            value: 'Năng mí'
                        },
                    ]} style={{ width: 460 }}
                        appearance='subtle' searchable={false} placeholder='Lựa chọn dịch vụ'
                         />
            </Pane>
            <Pane display="flex" className='h-7 w-full py-1 px-3 mb-2 rounded-md text-1 flex-col box-border bg-gray-50'>
                <Pane>
                    Nguồn khách đến
                </Pane>
                <Pane>
                    <select className='h-full w-full bg-gray-50 outline-none text-sm'>
                        <option value="Lựa chọn nguồn khách đến">Lựa chọn nguồn khách đến</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Zalo">Zalo</option>
                        <option value="Website">Website</option>
                        <option value="Trực tiếp đến cửa hàng">Trực tiếp đến cửa hàng</option>
                        <option value="Đến từ các nguồn khác">Đến từ các nguồn khác</option>
                    </select>
                </Pane>
            </Pane>
            <Pane display="flex" className='h-10 w-full py-1 px-3 mb-2 rounded-md text-1 flex-col box-border bg-gray-50'>
                <Pane>
                    Ghi chú
                </Pane>
                <Pane>
                    <input className='h-full w-full bg-gray-50 outline-none text-sm' type="text" />
                </Pane>
            </Pane>
            <Pane display="flex" className=' flex-row-reverse'>
                <Button appearance="primary">Tạo cơ hội</Button>
            </Pane>
        </Pane>
    );
}

export default Tchm;