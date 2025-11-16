import { ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black sticky top-0 z-10 shadow-lg">
        <div className="px-4 py-4">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="flex items-center gap-2 hover:opacity-80">
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <h1 className="text-lg font-semibold">About This Project</h1>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="bg-white text-black rounded-xl p-6 shadow-2xl max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-3">T.I.P.-Q.C. Campus Buildings 5 &amp; 9: Signal &amp; Socket Mapping</h2>
          <p className="mb-4">An Android mobile app that allows students to see mapped strong-signal areas along with nearby power socket locations.</p>

          <div className="mb-4">
            <h3 className="font-semibold">Created by:</h3>
            <ul className="list-disc ml-6 mt-2 text-sm">
              <li>Aradanas, Leena Clarisse S.</li>
              <li>De Leon, Juan Miguel</li>
              <li>De Omampo, Julius Mark</li>
              <li>Sembrero, Christian Dane</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Course / Section</h3>
            <div className="text-sm mt-2">GEE 003-CPE41S1</div>
          </div>

          <div>
            <h3 className="font-semibold">Presented to</h3>
            <div className="text-sm mt-2">MR. FERRER, LAURENTE</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
