import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

const ActivationPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50/50 flex flex-col items-center justify-center p-4">
            <Card className="w-full max-w-lg bg-white shadow-sm border border-gray-100 p-8 text-center">
                <CardContent>
                    <h1 className="text-2xl font-bold mb-4">Activation Page</h1>
                    <p className="text-gray-500 mb-8">This is a placeholder for the activation instructions.</p>
                    <Button
                        className="w-full bg-[#1A56DB] hover:bg-[#1546b3] text-white"
                        onClick={() => navigate('/wallet/activation-success')}
                    >
                        I Have Scanned
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default ActivationPage;
