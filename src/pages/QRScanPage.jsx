import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Loader2 } from 'lucide-react'; // Added Loader2 for loading effect
import Header from '@/components/Layout/Header.jsx';
import Footer from '@/components/Layout/Footer.jsx';
import ActivationSteps from '@/components/QR/ActivationSteps.jsx';
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from 'react-router-dom';

// This matches the hardcoded value you inserted into your database
const esimActivationString = "LPA:1$esim.telco.com$ABC123456789";

const ActivateESIM = () => {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const navigate = useNavigate();

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(esimActivationString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScanned = async () => {
    setIsLoading(true); // Start loading
    
    try {
      // 1. Send the activation code to your backend
      const response = await fetch('http://localhost:5000/api/qr/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          activationCode: esimActivationString 
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // 2. Success: Navigate to the success page
        navigate('/activate-success'); 
      } else {
        // 3. Error: Show message (e.g., "Already Active")
        alert(data.message || "Activation failed. Please try again.");
      }

    } catch (error) {
      console.error("Error activating eSIM:", error);
      alert("Network error. Is your backend server running?");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Header />
      </div>
      
      <main className="flex-1 px-6 py-12">
        <div className="max-w-5xl mx-auto">
  
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Activate Your eSIM
            </h1>
            <p className="text-gray-600">
              Scan the QR code below with your mobile device to install your eSIM profile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Left Column: QR Code */}
            <Card className="bg-white border shadow-sm">
              <CardContent className="p-8 flex flex-col items-center">
                
                <div className="w-64 h-64 bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                   <div className="w-48 h-56 bg-white rounded-2xl flex items-center justify-center shadow-md">
                     <QRCodeCanvas
                       value={esimActivationString}
                       size={160}
                       level="H"
                       className="rounded-lg"
                     />
                   </div>
                 </div>

                <p className="text-sm text-gray-600 text-center mb-4">
                  Having trouble? Try copying the details manually.
                </p>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleCopyDetails}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? 'Copied!' : 'Copy Details'}
                </Button>
              </CardContent>
            </Card>
        
            {/* Right Column: Instructions & Action */}
            <Card className="bg-white border shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Activation Instructions
                </h2>

                <div className="space-y-6">
                 <ActivationSteps/>
                </div>

                <Button
                  className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                  onClick={handleScanned}
                  disabled={isLoading} // Disable button while loading
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Activating...
                    </>
                  ) : (
                    "I Have Scanned"
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ActivateESIM;