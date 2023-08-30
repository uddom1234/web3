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

  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

  const sortTransactions = (transactions, order) => {
    return [...transactions].sort((a, b) => {
      const dateA = new Date(a.date.split('/').reverse().join('-'));
      const dateB = new Date(b.date.split('/').reverse().join('-'));
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
  };

  const sortedTransactions = sortTransactions(transactionHistory, sortOrder);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = sortedTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const nextPage = () => {
    if (currentPage < Math.ceil(sortedTransactions.length / transactionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const toggleSortOrder = () => {
    setSortOrder(prevSortOrder => prevSortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-24 px-8 py-4">
        <div className="bg-gray-800 p-6 mb-8 text-white border-2 border-black shadow-xl rounded-lg">
<<<<<<< HEAD
          <h1 className="text-center">History Page</h1>


=======
          <h1 className="text-center animate-bounce font-bold text-2xl">Welcome Uddom Pang!</h1>
>>>>>>> 590dd54569ff92c235247ab2ab5fcc8ef3e351ce
        </div>
        <table className="min-w-full border-collapse border border-black shadow-xl">
          <thead>
            <tr>
              <th className="py-2 px-4 border border-black">Transaction ID</th>
              <th className="py-2 px-4 border border-black">Method</th>
              <th  className="py-2 px-4 border border-black"><button onClick={toggleSortOrder}>Date {sortOrder === 'asc' ? '↓' : '↑'}</button></th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border border-black">{transaction.id}</td>
              <td className="py-2 px-4 border border-black">{transaction.method}</td>
              <td className="py-2 px-4 border border-black">{transaction.date}</td>
            </tr>
            ))}
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