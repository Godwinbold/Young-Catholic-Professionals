import React from "react";
import QRCode from "react-qr-code";

const App = () => {
  const companyPageURL = "https://ycpdaylagos.vercel.app/"; 

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">Young Catholic Professionals</h1>

        <div className="bg-white p-4 rounded-lg shadow border inline-block">
          <QRCode value={companyPageURL} size={180} />
        </div>

        <p className="text-gray-600 text-sm mt-4">
          Scan the QR code to View Direction.
        </p>
      </div>
    </div>
  );
};

export default App;