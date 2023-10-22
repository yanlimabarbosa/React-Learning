import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url)
        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }

        const user = await resp.json()
        setUser(user)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchUser()
  }, [url])

  return { user, isLoading, isError }
}
