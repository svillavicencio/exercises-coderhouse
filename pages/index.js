import ItemList from "./components/ItemList"
import Head from "next/head"
import Layout from "./components/layout"

export default function Home() {
  return (
  <Layout>
    <Head>
      <title>📝 Coderhouse Ejercicios</title>
    </Head>
    <div className="pt-20">
      <ItemList/>
    </div>
  </Layout>
  )
}
