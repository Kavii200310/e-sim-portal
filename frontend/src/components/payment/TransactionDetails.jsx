import React from 'react';
import { Card } from '@/components/ui/card';

const TransactionDetails = ({ details }) => {
    return (
        <Card className="p-6 border-none shadow-sm w-full bg-white rounded-3xl">
            <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-slate-500 text-sm font-medium">Transaction ID</span>
                    <span className="text-gray-900 text-sm font-semibold">{details.transactionId}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-slate-500 text-sm font-medium">Date</span>
                    <span className="text-gray-900 text-sm font-semibold">{details.date}</span>
                </div>
                {details.method && (
                    <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="text-slate-500 text-sm font-medium">Payment Method</span>
                        <div className="flex items-center gap-2">
                            
                            {details.method.includes("Visa") && <span className="text-gray-400">💳</span>}
                            <span className="text-gray-900 text-sm font-semibold">{details.method}</span>
                        </div>
                    </div>
                )}
                {details.amountAttempted ? (
                    <div className="flex justify-between py-2 pt-4">
                        <span className="text-slate-500 text-sm font-bold">Amount Attempted</span>
                        <span className="text-gray-900 text-sm font-bold">{details.amountAttempted}</span>
                    </div>
                ) : (
                    <div className="flex justify-between py-2 pt-4">
                        <span className="text-slate-500 text-sm font-bold">Amount Paid</span>
                        <span className="text-gray-900 text-sm font-bold">{details.amount}</span>
                    </div>
                )}

            </div>
        </Card>
    );
};

export default TransactionDetails;
