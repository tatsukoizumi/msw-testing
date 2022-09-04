import type { NextPage } from "next"
import useSWR from "swr"

const Home: NextPage = () => {
  const { data, error } = useSWR<{ name: string }, Error>("api/hello", () =>
    fetch("api/hello").then(res => res.json())
  )

  if (error) return <p>{error.message}</p>
  if (!data) return <p>loading...</p>

  return (
    <main>
      <p>{data.name}</p>
    </main>
  )
}

export default Home
