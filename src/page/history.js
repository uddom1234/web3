import React from 'react';
import '../style/History.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class 
History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [
        { id: '123123124312432412432', method: 'mint', date: '09/02/2023' },
        { id: '123123123213213123122', method: 'gift', date: '02/02/2013' },
        { id: '123123123213125456676', method: 'mint', date: '09/02/2019' },
        { id: '9402348548359234', method: 'gift', date: '08/02/2022' }
      ]
    };
  }

  render() {
    return (
        <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow">
        <h1>History Page</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Method</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.transactions.map((transaction, index) => {
              return (
                <tr key={index}>
                  <td>{transaction.id}</td>
                  <td>{transaction.method}</td>
                  <td>{transaction.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </main>
        <Footer/>
      </div>
      
    );
  }
}

export default History;
