import product1 from '@/assets/images/product-1.png'
import product2 from '@/assets/images/product-2.png'
import product3 from '@/assets/images/product-3.png'
import product4 from '@/assets/images/product-4.png'
import product5 from '@/assets/images/product-5.png'

export type ProductType = {
  id: number
  title: string
  price: number
  imgSrc: string
}

export type ProductListConfigType = {
  products: ProductType[]
}

export const productListConfig: ProductListConfigType = {
  products: [
    {
      id: 1,
      title: 'Тыква',
      price: 500,
      imgSrc: product1,
    },
    {
      id: 2,
      title: 'Цветная капуста',
      price: 350,
      imgSrc: product2,
    },
    {
      id: 3,
      title: 'Мята',
      price: 150,
      imgSrc: product3,
    },
    {
      id: 4,
      title: 'Базилик',
      price: 450,
      imgSrc: product4,
    },
    {
      id: 5,
      title: 'Кабачок',
      price: 50,
      imgSrc: product5,
    },
  ],
}
