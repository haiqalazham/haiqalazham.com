import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { sortNullableDatesDesc } from "../utils/content";

export async function GET(context: APIContext) {
    const posts = (await getCollection("blog")).sort((a, b) =>
        sortNullableDatesDesc(a.data.date, b.data.date),
    );

    return rss({
        title: "Haiqal",
        description:
            "Writing on software, engineering, photography and sustainability.",
        site: context.site!,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/blog/${post.id}/`,
        })),
    });
}
