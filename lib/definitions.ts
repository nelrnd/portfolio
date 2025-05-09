export type Project = {
  slug: string
  title: string
  year: number
  subTitle: string
  desc: string
  tags: string[]
  urls: {
    live: string
    code: string
  }
}
