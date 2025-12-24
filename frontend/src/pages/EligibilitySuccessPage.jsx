import React from 'react';
import { useNavigate } from 'react-router-dom';
import EligibleStatusCard from '@/components/eligibility/EligibleStatusCard';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const EligibilitySuccessPage = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/choose-number');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <Header />
                </div>
            </header>

            <main className="grow flex items-center justify-center p-4">
                <EligibleStatusCard
                    title="You are Eligible!"
                    message="Great news! Your device is fully compatible with our eSIM technology. You can proceed with the activation process immediately."
                    buttonText="Continue Activation"
                    onButtonClick={handleContinue}

                />
            </main>

            <Footer />
        </div>
    );
};

export default EligibilitySuccessPage;
