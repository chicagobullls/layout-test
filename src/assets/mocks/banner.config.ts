export type MainBlockType = {
  id: number
  title: string
  subtitle: string
  imgSrc: string
  backgroundGradient: string
  url: string
}

export type AsideBlockType = {
  title: string
  description: string
  imgSrc: string
  url: string
}

export type BannerConfigType = {
  mainBlock: MainBlockType
  asideBlock: AsideBlockType
}

export const bannerConfig: BannerConfigType = {
  mainBlock: {
    id: 1,
    title: 'Фестиваль фермерских товаров',
    url: '#',
    subtitle: '20-22 сентября',
    imgSrc: '#',
    backgroundGradient: 'linear-gradient(180deg, rgba(173, 180, 148, 0) 0%, #aeb595 100%)',
  },
  asideBlock: {
    title: 'Выставка тыкв',
    description: 'Местные фермеры покажут свои самые большие тыквы. Посоревнуются чья тыква тяжелее и крепче.',
    imgSrc: '#',
    url: '#',
  },
}
