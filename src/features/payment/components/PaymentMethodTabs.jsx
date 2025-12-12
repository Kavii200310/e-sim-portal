import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const PaymentMethodTabs = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();
        setLoading(true);
        
        setTimeout(() => {
            setLoading(false);
            navigate('/payment/success');
        }, 2000);
    };

    return (
        <div className="w-full">
            <h3 className="text-lg font-semibold mb-4">Choose your payment method</h3>

            <Tabs defaultValue="card" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-200/50 p-1">
                    <TabsTrigger value="card" className="bg-white shadow-sm data-[state=active]:bg-white data-[state=active]:text-black">Credit/Debit Card</TabsTrigger>
                    <TabsTrigger value="wallet">Mobile Wallet</TabsTrigger>
                </TabsList>

                <TabsContent value="card">
                    <form onSubmit={handlePayment} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                placeholder="Card Number"
                                required
                                pattern="[0-9]{13,19}"
                                title="Card number should be between 13 and 19 digits"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                placeholder="MM / YY"
                                required
                                pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
                                title="Expiry date MM/YY"
                            />
                            <Input
                                placeholder="CVC"
                                required
                                pattern="[0-9]{3,4}"
                                title="3 or 4 digit CVC"
                                type="password"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input placeholder="Cardholder Name" required />
                        </div>

                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-11 text-base mt-2" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                "Simulate Payment"
                            )}
                        </Button>
                    </form>
                </TabsContent>

                <TabsContent value="wallet">
                    <div className="p-6 text-center text-gray-500 bg-gray-50 rounded-lg border border-dashed">
                        Mobile Wallet integration coming soon
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default PaymentMethodTabs;
