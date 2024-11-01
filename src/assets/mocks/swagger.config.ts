export const swaggerConfig = {
  openapi: '3.0.0',
  info: {
    title: 'API: Задание по верстке',
    version: '0.0.1',
    description: 'Требования к API: Задание по верстке. Со стороны frontend',
  },
  paths: {
    '/api/products': {
      get: {
        summary: 'Получить список продуктов',
        responses: {
          '200': {
            description: 'Успешный ответ',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    products: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Product',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/banner': {
      get: {
        summary: 'Получить конфигурацию баннера',
        responses: {
          '200': {
            description: 'Успешный ответ',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Banners',
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Product: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            example: 1,
          },
          title: {
            type: 'string',
            example: 'Тыква',
          },
          price: {
            type: 'number',
            example: 500,
          },
          images: {
            type: 'object',
            properties: {
              small: {
                type: 'string',
                example: '/images/aside-1.png',
              },
              large: {
                type: 'string',
                example: '/images/aside-1.png',
              },
            },
          },
        },
        required: ['id', 'title', 'price', 'images'],
      },
      Banner: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            example: 1,
          },
          title: {
            type: 'string',
            example: 'Фестиваль фермерских товаров',
          },
          description: {
            type: 'string',
            example: '20-22 сентября',
          },
          images: {
            type: 'object',
            properties: {
              small: {
                type: 'string',
                example: '/images/aside-1.png',
              },
              large: {
                type: 'string',
                example: '/images/aside-1.png',
              },
            },
          },
          url: {
            type: 'string',
            example: '#',
          },
        },
        required: ['id', 'title', 'description', 'images', 'url'],
      },
      MainBanner: {
        type: 'object',
        properties: {
          schema: {
            $ref: '#/components/schemas/Banner',
          },
          gradients: {
            type: 'object',
            properties: {
              mobile: {
                type: 'string',
                example: 'linear-gradient(180deg, rgba(173, 180, 148, 0) 0%, #aeb595 100%)',
              },
              desktop: {
                type: 'string',
                example: 'linear-gradient(180deg, rgba(173, 180, 148, 0) 0%, #aeb595 100%)',
              },
            },
          },
        },
      },
      AsideBanner: {
        type: 'object',
        properties: {
          schema: {
            $ref: '#/components/schemas/Banner',
          },
        },
      },
      Banners: {
        type: 'object',
        properties: {
          mainBlock: {
            $ref: '#/components/schemas/MainBanner',
          },
          asideBlock: {
            $ref: '#/components/schemas/AsideBanner',
          },
        },
      },
    },
  },
}
