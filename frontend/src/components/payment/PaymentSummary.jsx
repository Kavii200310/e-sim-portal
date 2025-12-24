import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PaymentSummary = ({ selectedNumber }) => {
    return (
        <Card className="border-none shadow-none bg-transparent sm:bg-card sm:border sm:shadow-sm mb-6">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Payment Confirmation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-4">
                    <span className="text-gray-500">Order Summary</span>
                    <span className="font-medium">Tourist eSIM Plan-30 Days</span>
                </div>
                <div className="flex justify-between border-b pb-4">
                    <span className="text-gray-500">Merchant</span>
                    <span className="font-medium">SLT-Mobitel eSIM Purchase</span>
                </div>
                {selectedNumber && (
                    <div className="flex justify-between border-b pb-4">
                        <span className="text-gray-500">Phone Number</span>
                        <span className="font-medium">{selectedNumber.phone_number}</span>
                    </div>
                )}
                <div className="flex justify-between pt-2">
                    <span className="text-gray-500">Total Amount</span>
                    <span className="font-bold text-lg">
                        {selectedNumber ? `LKR ${selectedNumber.price}` : 'LKR 0.00'}
                    </span>
                </div>
            </CardContent>
        </Card>
    );
};

export default PaymentSummary;
