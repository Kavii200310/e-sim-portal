import React from 'react';

const ActivationSteps = () => {
    const steps = [
        {
            title: "Open Settings",
            description: "Go to Settings > Cellular (or Mobile Data) on your device."
        },
        {
            title: "Add eSIM",
            description: "Tap 'Add eSIM' or 'Add Cellular Plan'."
        },
        {
            title: "Scan QR Code",
            description: "Use your camera to scan the QR code shown on the left."
        },
        {
            title: "Confirm Activation",
            description: "Follow the on-screen prompts to complete the setup."
        }
    ];

    return (
        <div className="space-y-4">
            {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                        {index + 1}
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-900">{step.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActivationSteps;
