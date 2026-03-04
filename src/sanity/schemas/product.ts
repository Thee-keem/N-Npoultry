import { defineField, defineType } from "sanity";

export const productType = defineType({
    name: "product",
    title: "Product",
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
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Eggs", value: "eggs" },
                    { title: "Fertilizer", value: "fertilizer" },
                    { title: "Livestock", value: "livestock" },
                ],
            },
            validation: (Rule) => Rule.required(),
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
            name: "description",
            title: "Description",
            type: "blockContent",
        }),
        defineField({
            name: "features",
            title: "Features / Benefits",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "specifications",
            title: "Specifications",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "label", type: "string", title: "Label" },
                        { name: "value", type: "string", title: "Value" },
                    ],
                },
            ],
        }),
        defineField({
            name: "pdf",
            title: "Product Spec PDF",
            type: "file",
        }),
    ],
});
