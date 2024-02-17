import Track from "./Track"

const getProducts = async () => {
  const res = await fetch(
    "https://surfacelevelclo.myshopify.com/admin/api/2024-01/graphql.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.ADMIN!,
      },
      body: JSON.stringify({
        query: `{products(first:10,query:"tag:top"){nodes{handle featuredImage{url}}}}`,
      }),
    },
  ).then((res) => res.json())

  return res
}

const Home = async () => {
  const res = await getProducts()
  const { nodes } = res.data.products

  return (
    <>
      <Track products={nodes} />
    </>
  )
}

export default Home
