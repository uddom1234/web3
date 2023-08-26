import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class History extends React.Component {
  //initialize component properties and state
  constructor(props) {
    //call the parent class constructor and set up this.props
    super(props);
    this.state = {
      transactionHistory: [
        { id: '1111111111111111111', method: 'mint', date: '09/02/2023' },
        { id: '2222222222222222222', method: 'gift', date: '02/02/2013' },
        { id: '3333333333333333333', method: 'mint', date: '09/02/2019' },
        { id: '4444444444444444444', method: 'gift', date: '08/02/2022' },
        { id: '5555555555555555555', method: 'gift', date: '02/02/2013' },
        { id: '6666666666666666666', method: 'mint', date: '09/02/2019' },
        { id: '7777777777777777777', method: 'gift', date: '08/02/2022' }
      ]
    };
  }

  //describe the component's UI
  render() {
    return (
        <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow mt-24 px-8 py-4"> 
          <div className="bg-gray-800 p-6 mb-8 text-white border-2 border-black shadow-xl">
            <h1 className="text-center">History Page</h1>
          </div>
          <table className="min-w-full border-collapse border border-black shadow-xl">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-black">Transaction</th>
                <th className="py-2 px-4 border border-black">Method</th>
                <th className="py-2 px-4 border border-black">Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.transactionHistory.map((transactionHistory, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2 px-4 border border-black">{transactionHistory.id}</td>
                    <td className="py-2 px-4 border border-black">{transactionHistory.method}</td>
                    <td className="py-2 px-4 border border-black">{transactionHistory.date}</td>
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