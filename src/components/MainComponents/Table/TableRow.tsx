import React from 'react';
import { Customer } from '../Main';
const TableRow: React.FC<Customer> = ({CustomerName,Company,Phone,Email,Country,Status}) => {
    return (
        <tr className="customers__table-row">
            <td className="customers__table-data">{CustomerName}</td>
            <td className="customers__table-data">{Company}</td>
            <td className="customers__table-data">{Phone}</td>
            <td className="customers__table-data">{Email}</td>
            <td className="customers__table-data">{Country}</td>
            <td className='customers__table-data-status' ><span className={Status === 'Active'?'customers__table-data--active':'customers__table-data--inActive'}>{Status}</span></td>
        </tr>
    )
}
export default TableRow