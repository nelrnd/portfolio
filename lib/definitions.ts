export type Project = {
  slug: string
  title: string
  subTitle: string
  year: number
  tags: string[]
  roles: string[]
  desc: string
  thumbnail: string
  links: {
    website: string
    code: string
  }
}
