import Image from 'next/image'
import { client } from "../contentful";

export default function Home() {
  client.getEntries()
    .then((response: any) => console.log(response.items))
    .catch(console.error)
    
  return (
    <>
      <main>
      </main>
    </>
  )
}
