import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                <path
                  d="M14 2v10l-1.5-1.5L11 12V2a1 1 0 011-1h1a1 1 0 011 1z"
                  fill="currentColor"
                />
                <path
                  d="M12.5 12.5L17 18H8l4.5-5.5z"
                  fill="currentColor"
                />
                <circle cx="12.5" cy="19.5" r="1.5" fill="currentColor" />
                <rect x="12" y="18" width="1" height="4" fill="currentColor" />
              </svg>
              <span className="text-xl font-bold text-white">
                ClubLeaderboard
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Find the perfect club for your game.
            </p>
          </div>

          {/* Rankings */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Rankings</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/drivers" className="hover:text-white transition-colors">
                  Drivers
                </Link>
              </li>
              <li>
                <Link to="/irons" className="hover:text-white transition-colors">
                  Irons
                </Link>
              </li>
              <li>
                <Link to="/wedges" className="hover:text-white transition-colors">
                  Wedges
                </Link>
              </li>
              <li>
                <Link to="/putters" className="hover:text-white transition-colors">
                  Putters
                </Link>
              </li>
              <li>
                <Link to="/hybrids" className="hover:text-white transition-colors">
                  Hybrids
                </Link>
              </li>
              <li>
                <Link
                  to="/fairway-woods"
                  className="hover:text-white transition-colors"
                >
                  Fairway Woods
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/compare"
                  className="hover:text-white transition-colors"
                >
                  Compare Clubs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="hover:text-white transition-colors"
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 text-sm md:flex-row">
          <p>&copy; 2026 ClubLeaderboard. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
