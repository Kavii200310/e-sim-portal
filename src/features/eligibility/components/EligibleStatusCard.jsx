import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const EligibleStatusCard = ({ title, message, buttonText, onButtonClick, secondaryMessage }) => {
    return (
        <Card className={cn(
            "w-full max-w-2xl mx-auto overflow-hidden border-2 shadow-md transition-all hover:shadow-lg",
            "border-green-100 shadow-green-50/50"
        )}>
            <CardContent className="flex flex-col items-center justify-center p-10 text-center space-y-6">
                <div className={cn(
                    "h-16 w-16 rounded-full flex items-center justify-center mb-2",
                    "bg-green-100 text-green-600"
                )}>
                    <Check className="h-8 w-8 stroke-3" />
                </div>

                <div className="space-y-2 max-w-lg">
                    <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
                    <p className="text-slate-500 text-base leading-relaxed">
                        {message}
                    </p>
                    {secondaryMessage && (
                        <p className="text-slate-500 text-sm mt-2">
                            {secondaryMessage}
                        </p>
                    )}
                </div>

                <div className="pt-2 w-full max-w-xs">
                    <Button
                        onClick={onButtonClick}
                        className={cn(
                            "w-full h-11 text-base font-semibold shadow-md transition-all hover:-translate-y-px",
                            "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200"
                        )}
                    >
                        {buttonText}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default EligibleStatusCard;
