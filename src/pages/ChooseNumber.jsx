import React, { useState } from 'react';
import ButtonGroup from '@/components/Button/ButtonGroup.jsx';
import Header from '@/components/Layout/Header.jsx';
import Footer from '@/components/Layout/Footer.jsx';
import { Search } from 'lucide-react';
import SelectDropdown from '@/components/common/SelectDropdown.jsx';
import NumberCard from '@/components/Card/NumberCard.jsx';

const ChooseNumber = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [goldFilter, setGoldFilter] = useState('All');
  const [silverFilter, setSilverFilter] = useState('All');
  const [standardFilter, setStandardFilter] = useState('All');

  const numbers = [
    { number: '077 123 4567', badge: 'Gold' },
    { number: '071 888 9900', badge: 'Gold' },
    { number: '076 543 2109', badge: null },
    { number: '075 112 2334', badge: 'Silver' },
    { number: '078 987 6543', badge: null },
    { number: '077 345 6789', badge: null },
    { number: '072 224 4668', badge: 'Silver' },
    { number: '071 500 5005', badge: 'Gold' },
    { number: '076 121 2121', badge: null },
    { number: '070 304 0506', badge: null },
    { number: '075 998 8776', badge: null },
    { number: '078 102 0304', badge: 'Silver' }
  ];

  const filteredNumbers = numbers.filter(item => 
    item.number.replace(/\s/g, '').includes(searchQuery.replace(/\s/g, ''))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Header />
        </div>
      </header>

      {/* Plan Select */}
      <section>
        <div className="mb-12 ">
            <div className="flex flex-col items-center"> 
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Plan Type</h2>
            </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <button className="p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-center  ">
              <h3 className="text-xl font-semibold text-gray-900">Postpaid</h3>
            </button>

            <button className="p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-center">
              <h3 className="text-xl font-semibold text-gray-900">Prepaid</h3>
            </button>

          </div>
        </div>
      </section>

      {/* Choose Number Section */}
      <section>
        <div className="mb-8 flex flex-col items-center"  >
          <h1 className="text-4xl font-bold text-gray-900 mb-2 justify-center">Choose Your New Number</h1>
          <p className="text-gray-600">Select one of the available numbers below to continue.</p>
        </div>

        {/* Search */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by preferred digits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <SelectDropdown  options={['All', 'Gold','Silver']} value={goldFilter} onChange={setGoldFilter} />
        </div>

        {/* Number Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {filteredNumbers.map((item) => (
            <NumberCard
              key={item.number}
              number={item.number}
              badge={item.badge}
              isSelected={selectedNumber === item.number}
              onClick={() => setSelectedNumber(item.number)}
            />
          ))}
        </div>

      
        <div className="flex justify-end">
          <ButtonGroup type="large">Continue</ButtonGroup>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChooseNumber;
