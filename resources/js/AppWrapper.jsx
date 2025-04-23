// resources/js/AppWrapper.jsx

import { useEffect } from 'react'
import axios from 'axios'

export default function AppWrapper({ children }) {
  useEffect(() => {
    axios.get('/sanctum/csrf-cookie') // ✅ Get CSRF token once
  }, [])

  return children
}
