import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Layout/Header.jsx';
import ActivatedImage from '@/assets/Activated.png';



const ActivateSuccessPage = () => {

  const navigate = useNavigate();

  const handleFinish = () => {
     navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

      <Header />
      </div>
      
      
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white shadow-xl border-none">
          <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
            <div className="w-full max-w-xs aspect-square bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl flex items-center justify-center p-8 mb-2">
             <img src={ActivatedImage} alt="Activated eSIM" />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                eSIM Activated Successfully!
              </h1>
              <p className="text-gray-600 text-base">
                Your new eSIM profile is ready to be used.
              </p>
            </div>

            <Button
              onClick={handleFinish}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200"
              size="lg"
            >
              Finish
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ActivateSuccessPage;