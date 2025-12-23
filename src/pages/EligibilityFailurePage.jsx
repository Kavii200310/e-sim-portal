import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotEligibleStatusCard from '@/components/eligibility/NotEligibleStatusCard';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const EligibilityFailurePage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <Header />
                </div>
            </header>

            <main className="grow flex items-center justify-center p-4">
                <NotEligibleStatusCard
                    title="You are not eligible at this time."
                    message="Reason: Your National ID is already associated with the maximum number of connections."
                    buttonText="Return to Home"
                    onButtonClick={handleBack}
                    secondaryMessage="Please contact support if you believe this is an error."
                />
            </main>

            <Footer />
        </div>
    );
};

export default EligibilityFailurePage;
