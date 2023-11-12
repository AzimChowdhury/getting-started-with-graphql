import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const result = db.products.find((pd) => pd.id === args.productId);
            return result;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            const result = db.categories.find((cg) => cg.id === args.categoryId);
            return result;
        },
    },
    Product: {
        category: (parent, args, context) => {
            const result = db.categories.find((cg) => cg.id === parent.categoryId);
            return result;
        },
        reviews: (parent, args, context) => {
            const result = db.reviews.filter((r) => r.productId === parent.id);
            return result;
        },
    },
    Category: {
        products: (parent, args, context) => {
            const result = db.products.filter((pd) => pd.categoryId === parent.id);
            return result;
        },
    },
};
