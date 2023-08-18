import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Words/play",
    description:
      "Essays by Alex Keen on marketing, game design, writing, improv and personal philosophy",
    site: "https://alexrkeen.com",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-gb</language>`,
  });
}
