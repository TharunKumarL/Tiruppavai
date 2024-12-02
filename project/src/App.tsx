import React, { useState } from 'react';
import { Scroll, BookOpen, Calendar } from 'lucide-react';
import DayContent from './components/DayContent';
import { getDay } from './data/tiruppavai';

function App() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-orange-700 text-amber-50 py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-3xl font-bold">తిరుప్పావై</h1>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span className="text-lg">మార్గశిర - December 16 to January 14</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[300px,1fr] gap-8">
          {/* Days Navigation */}
          <div className="bg-white p-4 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-bold mb-4 text-orange-800">పాశురములు</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2">
              {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`p-2 rounded-md text-center transition-colors
                    ${
                      selectedDay === day
                        ? 'bg-orange-600 text-white'
                        : 'bg-orange-100 text-orange-900 hover:bg-orange-200'
                    }`}
                >
                  Day {day}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {selectedDay ? (
              <DayContent 
                day={selectedDay} 
                content={getDay(selectedDay)} 
              />
            ) : (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 mx-auto text-orange-300 mb-4" />
                <h2 className="text-2xl font-bold text-orange-800 mb-2">
                  Welcome to Tiruppavai
                </h2>
                <p className="text-gray-600 mb-4">
                  Select a day from the left to begin reading the sacred verses.
                </p>
                <p className="text-sm text-orange-600">
                  Margazhi Month (December 16 - January 14)
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-orange-800 text-amber-50 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>శ్రీ ఆండాళ్ తిరువడిగళే శరణమ్</p>
        </div>
      </footer>
    </div>
  );
}

export default App;