import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const PaymentSummary = () => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4 font-inter text-gray-900">Payment Confirmation</h2>
      <Card className="rounded-lg shadow-sm border border-gray-100 bg-white">
        <CardContent className="p-0">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <span className="text-gray-500 font-medium">Order Summary</span>
            <span className="text-gray-900 font-medium">Tourist eSIM Plan-30 Days</span>
          </div>
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <span className="text-gray-500 font-medium">Merchant</span>
            <span className="text-gray-900 font-medium">SLT-Mobitel eSIM Purchase</span>
          </div>
          <div className="flex justify-between items-center p-6 bg-gray-50/50">
            <span className="text-gray-500 font-medium">Total Amount</span>
            <span className="text-gray-900 font-bold text-lg">LKR 2,499.00</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSummary;