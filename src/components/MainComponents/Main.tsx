import React, { useState } from 'react';
import TableRow from './Table/TableRow';
export type Customer = {
  CustomerName: string;
  Company: string;
  Phone: string;
  Email: string;
  Country: string;
  Status: 'Active' | 'Inactive';
};

const Main: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const data:Customer[] = [
    {CustomerName:'Jane Cooper',Company:'Microsoft',	Phone:'(225) 555-0118',	Email:'jane@microsoft.com',	Country:'United States',	Status:'Active'},
    {CustomerName:'Floyd Miles',Company:'Yahoo',	Phone:'(205) 555-0100',	Email:'floyd@yahoo.com',	Country:'Kiribati',	Status:'Inactive'},
    {CustomerName:'Ronald Richards',Company:'Adobe',	Phone:'(302) 555-0107',	Email:'ronald@adobe.com',	Country:'Israel',	Status:'Inactive'},
    {CustomerName:'Marvin McKinney',Company:'Tesla',	Phone:'(252) 555-0126',	Email:'marvin@tesla.com',	Country:'Iran',	Status:'Active'},
    {CustomerName:'Jerome Bell',Company:'Google',	Phone:'(629) 555-0129',	Email:'jerome@google.com',	Country:'Réunion',	Status:'Active'},
    {CustomerName:'Kathryn Murphy',Company:'Microsoft',	Phone:'(406) 555-0120',	Email:'kathryn@microsoft.com',	Country:'Curaçao',	Status:'Active'},
    {CustomerName:'Jacob Jones',Company:'Yahoo',	Phone:'(208) 555-0112',	Email:'jacob@yahoo.com',	Country:'Brazil',	Status:'Active'},
    {CustomerName:'Kristin Watson',Company:'Facebook',	Phone:'(704) 555-0127',	Email:'kristin@facebook.com',	Country:'Åland Islands',	Status:'Inactive'},
  ]
   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); 
  }

  const filterData = (data: Customer[], searchTerm: string): Customer[] => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return data.filter(item => 
      item.CustomerName.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.Company.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.Phone.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.Email.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.Country.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.Status.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }

  const filteredData = filterData(data, searchTerm); // застосовуємо фільтрацію до даних
  return (
    <main className="main">
      <h1 className='main__title'>Hello Evano 👋🏼,</h1>
      <section className="customers">
        <div className="customers__filtering">
          <div className="customers__filtering-buttons">
            <button className="customers__filtering-btn customers__filtering-btn--active">All Customers</button>
            <button className="customers__filtering-btn">Active Members</button>
          </div>
          <div className="customers__input-container">
            <input onChange={handleSearch} className='customers__filtering-input' type="text" placeholder="Search" />
          </div>
        </div>
        <div className="customers__table-container">
          <table className="customers__table">
            <thead>
              <tr>
                <th className="customers__table-header">Customer Name</th>
                <th className="customers__table-header">Company</th>
                <th className="customers__table-header">Phone Number</th>
                <th className="customers__table-header">Email</th>
                <th className="customers__table-header">Country</th>
                <th className="customers__table-header">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item:Customer, i: number) => <TableRow {...item}key={i} />)}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
export default Main