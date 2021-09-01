import React from "react"
import { Table } from 'rsuite';
import fakeData from './Data.json';
import { Pane } from 'evergreen-ui';

const { Column, HeaderCell, Cell, Pagination } = Table;
class Tabtable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: fakeData
        };
    }
    render() {
        return (
            <Pane className='w-full'>
                <Table
                    height={500}
                    data={this.state.data}
                    onRowClick={data => {
                        console.log(data);
                    }}
                >
                    <Column width={140} align="center" fixed>
                        <HeaderCell>Tên khách hàng</HeaderCell>
                        <Cell dataKey="id" />
                    </Column>

                    <Column width={90}>
                        <HeaderCell>Số điện thoại</HeaderCell>
                        <Cell dataKey="phone" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Dịch vụ</HeaderCell>
                        <Cell dataKey="service" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Người tạo</HeaderCell>
                        <Cell dataKey="lead" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Thời gian</HeaderCell>
                        <Cell dataKey="time" />
                    </Column>
                    <Column width={120} align="center" fixed="right">
                        <HeaderCell>Action</HeaderCell>

                        <Cell>
                            {rowData => {
                                function handleAction() {
                                    alert(`id:${rowData.id}`);
                                }
                                return (
                                    <div align="center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M8.57699 1.32416H5.46116C2.89866 1.32416 1.29199 3.13832 1.29199 5.70666V12.635C1.29199 15.2033 2.89116 17.0175 5.46116 17.0175H12.8145C15.3853 17.0175 16.9845 15.2033 16.9845 12.635V9.27832" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                );
                            }}
                        </Cell>
                    </Column>
                </Table>
            </Pane>
        );
    }
}
export default Tabtable;
