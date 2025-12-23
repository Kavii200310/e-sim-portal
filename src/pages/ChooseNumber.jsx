import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from '@/components/Button/ButtonGroup.jsx';
import Header from '@/components/Layout/Header.jsx';
import Footer from '@/components/Layout/Footer.jsx';
import { Search, Loader2 } from 'lucide-react';
import SelectDropdown from '@/components/common/SelectDropdown.jsx';
import NumberCard from '@/components/Card/NumberCard.jsx';

const ChooseNumber = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [goldFilter, setGoldFilter] = useState('All');
  const [planType, setPlanType] = useState('Prepaid');

  const [numbers, setNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  
  const formatPhoneNumber = (num) => {
    if (!num) return '';
  
    return num.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
  };

  const fetchNumbers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/numbers?type=${planType}`);
      if (!res.ok) throw new Error('Failed to fetch');

      const data = await res.json();

      if (data && data.length > 0) {
        const mapped = data.map(item => ({
          ...item,
          
          number: formatPhoneNumber(item.phone_number),
          
          badge: item.category === 'Normal' ? null : item.category,
          price: item.price
        }));
        setNumbers(mapped);
      }
    } catch (err) {
      console.error("Failed to fetch numbers", err);
      setError("Unable to load numbers at this time.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNumbers();
  }, [planType]);

  const filteredNumbers = numbers.filter(item => {
    if (!item.number) return false;

  
    const cleanNumber = item.number.replace(/\s/g, '');
    const cleanSearch = searchQuery.replace(/\s/g, '');
    const matchesSearch = cleanNumber.includes(cleanSearch);

    
    if (goldFilter === 'All') return matchesSearch;
    if (goldFilter === 'Gold') return matchesSearch && item.badge === 'Gold';
    if (goldFilter === 'Silver') return matchesSearch && item.badge === 'Silver';
    return matchesSearch;
  });

  const handleNumberSelect = async (item) => {
    try {
    

      const res = await fetch(`http://localhost:5000/api/numbers/lock/${item.id}`, {
        method: 'POST',
      });

      if (!res.ok) {
        if (res.status === 409) {
          alert('Sorry, this number was just taken.');
          fetchNumbers(); 
          return;
        }
        throw new Error('Failed to lock number');
      }

      
      setSelectedNumber(item.number);
      navigate('/payment', { state: { selectedNumber: item } });

    } catch (error) {
      console.error('Error selecting number:', error);
      alert('An error occurred while reserving the number. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Header />
        </div>
      </header>

      <main className="grow container mx-auto px-4 py-8">
        {/* Plan Select */}
        <section className="mb-12">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Select Your Plan Type</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => setPlanType('Postpaid')}
              className={`p-6 border-2 rounded-lg transition-all text-center ${planType === 'Postpaid' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-200 text-gray-900 hover:border-blue-500 hover:shadow-md'}`}
            >
              <h3 className={`text-xl font-semibold`}>Postpaid</h3>
            </button>
            <button
              onClick={() => setPlanType('Prepaid')}
              className={`p-6 border-2 rounded-lg transition-all text-center ${planType === 'Prepaid' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-200 text-gray-900 hover:border-blue-500 hover:shadow-md'}`}
            >
              <h3 className={`text-xl font-semibold`}>Prepaid</h3>
            </button>
          </div>
        </section>

        {/* Choose Number Section */}
        <section>
          <div className="mb-8 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Choose Your New Number</h1>
            <p className="text-gray-600">Select one of the available numbers below to continue.</p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8 max-w-4xl mx-auto w-full">
            <div className="flex-1 relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by preferred digits (e.g. 077...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full md:w-48">
              <SelectDropdown options={['All', 'Gold', 'Silver']} value={goldFilter} onChange={setGoldFilter} />
            </div>
          </div>

          {/* Content Area */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {filteredNumbers.map((item) => (
                <NumberCard
                  key={item.id}
                  number={item.number}
                  badge={item.badge}
                  price={item.price}
                  isSelected={selectedNumber === item.number}
                  onClick={() => handleNumberSelect(item)}
                />
              ))}
              {filteredNumbers.length === 0 && (
                <div className="col-span-full text-center text-gray-500 py-10">
                  No numbers match your criteria.
                </div>
              )}
            </div>
          )}

          <div className="flex justify-end mt-8">
            <ButtonGroup type="large">Continue</ButtonGroup>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChooseNumber;