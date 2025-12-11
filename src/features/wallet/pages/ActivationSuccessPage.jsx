import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

// Note: User didn't ask to install react-use, so I will fall back to dynamic standard window measurements or just let Confetti handle defaults (it defaults to window size).
// Actually, react-confetti automatically handles window resize if no props provided usually, or we can pass window.innerWidth.
// Let's stick to simple implementation without extra deps if possible, or just standard window.

const ActivationSuccessPage = () => {
    const navigate = useNavigate();

    // Simple window dimension hook or just use defaults (fullscreen)
    // React Confetti by default takes full screen.

    return (
        <div className="min-h-screen bg-gray-50/50 flex flex-col font-sans relative overflow-hidden">
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                numberOfPieces={500}
                gravity={0.2}
            />

            {/* Minimal Header */}
            <header className="bg-white border-b border-gray-100 py-4 mb-8 z-10 relative">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#1A56DB] rounded-full flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                                <path d="M2 17L12 22L22 17" />
                                <path d="M2 12L12 17L22 12" />
                            </svg>
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Telco Lanka</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>
                </div>
            </header>

            <main className="grow flex flex-col items-center justify-center px-4 pb-20 z-10 relative">
                <Card className="w-full max-w-md bg-white shadow-lg border-gray-100 overflow-hidden">
                    <CardContent className="flex flex-col items-center p-0">
                        {/* Illustration Area */}
                        <div className="bg-[#FFF8F0] w-full flex justify-center py-12 px-8">
                            <img
                                src="https://placehold.co/400x300?text=Success+Illustration"
                                alt="Celebration"
                                className="w-64 h-auto mix-blend-multiply"
                            />
                        </div>

                        {/* Content Area */}
                        <div className="p-8 text-center flex flex-col items-center w-full">
                            <h1 className="text-2xl font-bold text-gray-900 mb-3">eSIM Activated Successfully!</h1>
                            <p className="text-gray-500 mb-8 font-medium">
                                Your new eSIM profile is ready to be used.
                            </p>

                            <Button
                                className="w-full bg-[#1A56DB] hover:bg-[#1546b3] text-white py-6 text-sm font-semibold rounded-lg"
                                onClick={() => navigate('/')}
                            >
                                Finish
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default ActivationSuccessPage;
