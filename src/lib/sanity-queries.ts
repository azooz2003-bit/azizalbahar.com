export const writingsQuery = `
  *[_type in ["thought", "article"]] | order(date desc) {
    "id": _id,
    title,
    "excerpt": select(_type == "thought" => content, excerpt),
    content,
    "category": _type,
    date
  }
`;

export const videosQuery = `
  *[_type == "video"] | order(date desc) {
    "id": _id,
    title,
    description,
    youtubeId,
    date
  }
`;
