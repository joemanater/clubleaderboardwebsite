import { useEffect } from 'react'

const BASE = 'ClubLeaderboard'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} — Independent Golf Club Rankings & Comparisons`
  }, [title])
}
