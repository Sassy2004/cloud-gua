import { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import Base from '../Components/Base/Base';

const data = [
  { year: '2016', expense: 25000 },
  { year: '2017', expense: 30000 },
  { year: '2018', expense: 20000 },
  { year: '2019', expense: 25000 },
  { year: '2020', expense: 15000 },
  { year: '2021', expense: 35000 },
];

const Wallet = () => {
  useEffect(() => {
    window.document.title = 'Wallet | Cloudguard';
  }, []);

  return (
    <Base title={'Wallet'}>
      <div id="root"></div>
      <div className="p-8">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-green-100 p-4 rounded-full mr-4">
              <i className="fas fa-dollar-sign text-green-500 text-2xl"></i>
            </div>
            <div>
              <p className="text-gray-500">Total Amount</p>
              <p className="text-2xl font-semibold">$150,000</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-pink-100 p-4 rounded-full mr-4">
              <i className="fas fa-file-invoice-dollar text-pink-500 text-2xl"></i>
            </div>
            <div>
              <p className="text-gray-500">Number of Installments</p>
              <p className="text-2xl font-semibold">1,250</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-blue-100 p-4 rounded-full mr-4">
              <i className="fas fa-credit-card text-blue-500 text-2xl"></i>
            </div>
            <div>
              <p className="text-gray-500">Current Card</p>
              <p className="text-2xl font-semibold">Name</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-4">Payment Modes</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-4 rounded-full mr-4">
                  <i className="fas fa-credit-card text-yellow-500 text-2xl"></i>
                </div>
                <div>
                  <p className="text-gray-700">Deposit from my Card</p>
                  <p className="text-gray-400">28 January 2021</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-100 p-4 rounded-full mr-4">
                  <i className="fab fa-paypal text-purple-500 text-2xl"></i>
                </div>
                <div>
                  <p className="text-gray-700">Deposit Paypal</p>
                  <p className="text-gray-400">25 January 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Monthly Expense</h2>
            <div className="bg-white p-6 rounded-lg shadow-md h-80">
              <ResponsiveContainer>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="expense" stroke="#00BFFF" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Wallet;
