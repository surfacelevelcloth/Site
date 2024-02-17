"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Track = ({ products }: { products: Product[] }) => {
  const [active, setActive] = useState(0)

  const previous = () => {
    setActive(active === 0 ? products.length - 1 : active - 1)
  }

  const next = () => {
    setActive(active === products.length - 1 ? 0 : active + 1)
  }

  return (
    <div className="mx-auto flex items-center justify-center">
      <div
        className="mr-5 cursor-pointer select-none text-3xl"
        onClick={previous}
      >
        {"<"}
      </div>

      <div>
        <Link href={"/product/" + products[active].handle}>
          <Image
            src={products[active].featuredImage.url}
            alt="Product Image"
            width={300}
            height={300}
          />
        </Link>
      </div>

      <div className="ml-5 cursor-pointer select-none text-3xl" onClick={next}>
        {">"}
      </div>
    </div>
  )
}

export default Track
