import { useState } from 'react';

interface LoginPageProps {
  onLogin: (email: string) => void;
}

// Accept emails that look like school/university addresses.
const SCHOOL_EMAIL_RE = /@(.+\.(edu|edu\.ph|school|uni|ac\.[a-z]{2}|edu\.[a-z]{2}))$/i;

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string) => {
    if (!value.includes('@')) return 'Enter a valid email address';
    if (!SCHOOL_EMAIL_RE.test(value)) return 'Please use your school / university email';
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const v = validate(email.trim());
    if (v) {
      setError(v);
      return;
    }
    // Mock login: call onLogin with the email
    onLogin(email.trim());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black p-4">
      <div className="relative w-full max-w-md">
        {/* Decorative shapes */}
        <svg className="absolute -top-8 -left-8 w-40 h-40 opacity-40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#FBBF24" />
          <rect x="50" y="50" width="40" height="40" rx="8" fill="#F59E0B" />
        </svg>
        <svg className="absolute -bottom-8 -right-8 w-36 h-36 opacity-30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="40" ry="20" fill="#FDE68A" />
        </svg>

        <form onSubmit={handleSubmit} className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="mb-4">
            <h2 className="text-2xl mb-1">Sign in with your school email</h2>
            <div className="text-sm text-gray-600">
              <strong>T.I.P.-Q.C. Campus Buildings 5 &amp; 9: Signal &amp; Socket Mapping</strong>
              <div className="mt-1">An Android mobile app that allows students to see mapped strong-signal areas along with nearby power socket locations.</div>
            </div>
          </div>

        <label className="block mb-2 text-sm">School email</label>
        <input
          value={email}
          onChange={handleChange}
          type="email"
          placeholder="you@school.edu"
          className="w-full p-2 rounded bg-gray-50 border border-gray-300 mb-2 text-black"
        />
        {error && <div className="text-sm text-red-400 mb-2">{error}</div>}

        <div className="flex items-center justify-between gap-2">
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-2 bg-yellow-400 text-black rounded"
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => { setEmail(''); setError(null); }}
            className="px-3 py-2 bg-gray-100 text-black rounded border border-gray-200"
          >
            Clear
          </button>
        </div>
      </form>

        {/* Phone mockup / design accent */}
        <div className="absolute right-4 top-4 hidden md:block">
          <svg width="80" height="140" viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="76" height="136" rx="12" fill="#FDF7EB" stroke="#FBD38D" strokeWidth="3" />
            <rect x="12" y="18" width="56" height="92" rx="6" fill="#FFFFFF" />
            <circle cx="40" cy="120" r="4" fill="#F6AD55" />
            <rect x="20" y="28" width="40" height="12" rx="3" fill="#FEF3C7" />
            <rect x="20" y="46" width="40" height="8" rx="2" fill="#FFF7ED" />
            <rect x="20" y="56" width="40" height="8" rx="2" fill="#FFF7ED" />
          </svg>
        </div>
    </div>
  </div>
  );
}

export default LoginPage;
