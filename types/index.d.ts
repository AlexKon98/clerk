export interface Breadcrumb {
  id: number,
  name: string,
  link?: string
}

export interface Tab {
  id: number,
  name: string
  isActive: boolean
}

export interface SubscribeItem {
  id: number | string,
  title: string,
  heading: string,
  text: string,
  image: {
    desktop: string,
    mobile: string
  },
  list: string[],
  checkbox: {
    title: string,
    isActive: boolean
  }
}
