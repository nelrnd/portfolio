export type Project = {
  slug: string
  title: string
  year: number
  tags: string[]
  thumbnail: string
  links: {
    website: string
    code: string
  }
}
