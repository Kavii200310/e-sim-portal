import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label"; // Label component not present
import { CreditCard, Wallet, Loader2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const PaymentMethodTabs = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/payment/success');
    }, 2000);
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold mb-4 font-inter">Choose your payment method</h3>
      <Tabs defaultValue="card" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6 h-auto p-1 bg-gray-100/80 rounded-lg">
          <TabsTrigger
            value="card"
            className="flex items-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm rounded-md transition-all font-medium text-gray-500"
          >
            <CreditCard size={18} />
            Credit/Debit Card
          </TabsTrigger>
          <TabsTrigger
            value="wallet"
            className="flex items-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm rounded-md transition-all font-medium text-gray-500"
          >
            <Wallet size={18} />
            Mobile Wallet
          </TabsTrigger>
        </TabsList>

        <TabsContent value="card" className="space-y-4">
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Card Number</label>
              <Input placeholder="0000 0000 0000 0000" className="bg-white" required pattern="[0-9\s]{13,19}" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Expiry Date</label>
                <Input placeholder="MM/YY" className="bg-white" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">CVC</label>
                <Input placeholder="123" className="bg-white" required maxLength={4} />
              </div>
            </div>
            <div className="pt-2">
              <Button
                className="w-full md:w-full bg-[#1A56DB] hover:bg-[#1546b3] text-white font-semibold py-6 text-base"
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Simulate Payment"
                )}
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="wallet">
          <div className="p-6 text-center text-gray-500 bg-white rounded-lg border border-gray-100 shadow-sm min-h-[200px] flex flex-col justify-center items-center">
            <Wallet size={48} className="mb-4 text-gray-300" />
            <p>Mobile Wallet integration coming soon.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentMethodTabs;