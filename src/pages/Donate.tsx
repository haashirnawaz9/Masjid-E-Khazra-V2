import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { DollarSign, Heart } from 'lucide-react';
import { redirect } from 'react-router-dom';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const predefinedAmounts = [10, 25, 50, 100, 250, 500];

  const handleDonate = async () => {
    if (!amount) return;

    setLoading(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      // Create a checkout session
      const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount) * 100, // Convert to cents
          currency: 'usd',
        }),
      });

      const session = await response.json();

      // Redirect to Stripe checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const zellepayment = () => {
    window.location.href = 'https://www.zellepay.com'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Our Mosque</h1>
            <p className="text-xl text-gray-600">
              Your generous donations help us maintain our services and support our community
            </p>
            <p className="p-3 text-red-900">Unfortunatly stripe payments is not working right now. If possible, please donate using zelle. Our Zelle is <span className="font-bold">masjidkhazrany@gmail.com</span></p>
            <button onClick={zellepayment} className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out mt-3">Donate Using Zelle</button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
              {predefinedAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setAmount(preset.toString())}
                  className={`p-4 rounded-lg border ${
                    amount === preset.toString()
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                      : 'border-gray-200 hover:border-emerald-600'
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
                Or enter custom amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="custom-amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="0.00"
                  min="1"
                  step="0.01"
                />
              </div>
            </div>

            <button
              onClick={handleDonate}
              disabled={!amount || loading || parseFloat(amount) <= 0}
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Donate Now'}
            </button>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>All donations are tax-deductible.</p>
              <p>Tax ID: XX-XXXXXXX</p>
              <div className="mt-2 flex items-center justify-center space-x-2">
                <img src="/visa.svg" alt="Visa" className="h-8" />
                <img src="/mastercard.svg" alt="Mastercard" className="h-8" />
                <img src="/amex.svg" alt="American Express" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;