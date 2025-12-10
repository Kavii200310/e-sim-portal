import React from "react";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="p-6 bg-white shadow rounded-xl text-center">
      <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
