import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';
import axios from 'axios';

const PrayerTimes = () => {
  const today = new Date();
  const [prayerTimes, setPrayerTimes] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await axios.get("https://api.aladhan.com/v1/timingsByCity", {
          params: {
            city: "Queens",
            country: "US",
            method: 2,
          },
        });
        setPrayerTimes(response.data.data.timings);
        setError(null);
      } catch (error) {
        setError("Failed to fetch prayer times. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Prayer Times</h1>
            <p className="text-xl text-gray-600">{format(today, 'EEEE, MMMM do, yyyy')}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {loading && (
              <p className="p-6 text-center text-gray-600">Loading prayer times...</p>
            )}
            {error && (
              <p className="p-6 text-center text-red-600">{error}</p>
            )}
            {prayerTimes && (
              <div className="divide-y divide-gray-200">
                {Object.entries(prayerTimes).slice(0, 7).map(([prayer, time]) => (
                  <div
                    key={prayer}
                    className="flex items-center justify-between p-6 hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <Clock className="w-6 h-6 text-emerald-600 mr-4" />
                      <span className="text-lg font-medium capitalize">{prayer}</span>
                    </div>
                    <span className="text-lg text-gray-900">{time}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 bg-emerald-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-emerald-800 mb-2">Important Notes</h2>
            <ul className="list-disc list-inside text-emerald-700 space-y-2">
              <li>Please arrive 10 minutes before prayer times</li>
              <li>Prayer times are calculated for Flushing, NY</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimes;
