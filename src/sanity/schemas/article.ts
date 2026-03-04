import { defineField, defineType } from "sanity";

export const articleType = defineType({
    name: "article",
    title: "Article",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "summary",
            title: "Summary",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "body",
            title: "Body Content",
            type: "blockContent",
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        }),
    ],
});
