
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const History = () => { 
  const [transactionHistory] = useState([ 
    { id: '1111111111111111111', method: 'mint', date: '09/02/2023' },
    { id: '2222222222222222222', method: 'gift', date: '02/02/2013' },
    { id: '3333333333333333333', method: 'mint', date: '09/02/2019' },
    { id: '4444444444444444444', method: 'gift', date: '08/02/2022' },
    { id: '5555555555555555555', method: 'gift', date: '02/02/2013' },
    { id: '6666666666666666666', method: 'mint', date: '09/02/2019' },
    { id: '7777777777777777777', method: 'gift', date: '08/02/2022' },
    { id: '1111111111111111111', method: 'mint', date: '09/02/2023' },
    { id: '2222222222222222222', method: 'gift', date: '02/02/2013' },
    { id: '3333333333333333333', method: 'mint', date: '09/02/2019' },
    { id: '4444444444444444444', method: 'gift', date: '08/02/2022' },
    { id: '5555555555555555555', method: 'gift', date: '02/02/2013' },
    { id: '6666666666666666666', method: 'mint', date: '09/02/2019' },
    { id: '7777777777777777777', method: 'gift', date: '08/02/2022' } ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(6);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactionHistory.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const nextPage = () => {
    if (currentPage < Math.ceil(transactionHistory.length / transactionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-24 px-8 py-4">
        <div className="bg-gray-800 p-6 mb-8 text-white border-2 border-black shadow-xl rounded-lg">
          <h1 className="text-center">History Page</h1>
        </div>
        <table className="min-w-full border-collapse border border-black shadow-xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border border-black">Transaction ID</th>
              <th className="py-2 px-4 border border-black">Method</th>
              <th className="py-2 px-4 border border-black">Date</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction, index) => {
              return (
                <tr key={index}>
                  <td className="py-2 px-4 border border-black">{transaction.id}</td>
                  <td className="py-2 px-4 border border-black">{transaction.method}</td>
                  <td className="py-2 px-4 border border-black">{transaction.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 border rounded mr-2" onClick={prevPage}>Back</button>
          <button className="px-4 py-2 border rounded ml-2" onClick={nextPage}>Next</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;
