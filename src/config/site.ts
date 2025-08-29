import authorAvatar from "../../public/avatar.jpg";
export const siteConfig = {
  name: "Al Kayes Rifat Blog",
  description:
    "Al Kayes Rifat",
  author: "Al Kayes Rifat",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/alkayesrifat",
    twitter: "https://twitter.com/alkayesrifat",
    facebook: "https://facebook.com/alkayesrifat.py",
  },
};

export type SiteConfig = typeof siteConfig;
