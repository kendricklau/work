import { mockProducts } from "./mockData"

export async function getProductsInCollection() {
  // Simulating an API call delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return mockProducts.map((product) => ({
    node: product,
  }))
}

