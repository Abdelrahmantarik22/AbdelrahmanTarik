export const allProjectsQuery = `
  *[_type == "projects"]{
    title,
    _id,
    desc,
    tech,
    "image": mainImage.asset->url,
    repoLink,
    liveLink,
  }
`
