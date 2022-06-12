import { gql } from "~/libs";

export const FragmentProductDetails = gql`
  fragment ProductDetails on Product {
    id
    slug
    name
    images(first: 1) {
      url
    }
    categories(first: 1) {
      name
      slug
    }
    collections(first: 1) {
      id
      name
      slug
    }
    soldOut
  }
`;

export const QueryAllProducts = gql`
  query AllProducts($first: Int!, $skip: Int!) {
    products(orderBy: updatedAt_DESC, first: $first, skip: $skip) {
      ...ProductDetails
    }
    productsConnection {
      aggregate {
        count
      }
    }
    categories {
      id
      slug
      name
    }
    collections {
      id
      slug
      name
    }
  }

  ${FragmentProductDetails}
`;

export const QuerySearchProducts = gql`
  query SearchProducts($first: Int!, $skip: Int!, $searchQuery: String!) {
    products(
      orderBy: updatedAt_DESC
      first: $first
      skip: $skip
      where: { OR: [{ name_contains: $searchQuery }] }
    ) {
      ...ProductDetails
    }

    productsConnection(where: { OR: [{ name_contains: $searchQuery }] }) {
      aggregate {
        count
      }
    }
    categories {
      id
      slug
      name
    }

    collections {
      id
      slug
      name
    }
  }

  ${FragmentProductDetails}
`;
export const QueryCategoriesOrCollections = gql`
  query CategoriesOrCollections($first: Int!, $skip: Int!, $slug: String!) {
    products(
      where: {
        OR: [
          { collections_some: { slug: $slug } }
          { categories_some: { slug: $slug } }
        ]
      }
      orderBy: updatedAt_DESC
      first: $first
      skip: $skip
    ) {
      ...ProductDetails
    }
    productsConnection(
      where: {
        OR: [
          { collections_some: { slug: $slug } }
          { categories_some: { slug: $slug } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    categories {
      id
      slug
      name
    }
    collections {
      id
      slug
      name
    }
  }

  ${FragmentProductDetails}
`;

export const QueryAllNewProductsCollection = gql`
  query AllNewProductsCollection {
    newProducts: products(
      last: 30
      where: { collections_some: { slug: "produk-terbaru" } }
    ) {
      ...ProductDetails
    }

    categories {
      id
      slug
      name
      image {
        url
      }
    }
  }

  ${FragmentProductDetails}
`;

export const QueryOneProductBySlug = gql`
  query OneProductBySlug($productSlug: String!, $categorySlug: String!) {
    product(where: { slug: $productSlug }) {
      id
      name
      slug
      material
      height
      length
      width
      soldOut
      description {
        html
        text
      }
      images {
        id
        url
      }
      categories {
        id
        name
        slug
      }
      collections(first: 1) {
        id
        name
        slug
      }
    }

    # Recommended products
    category(where: { slug: $categorySlug }) {
      id
      name
      image {
        url
      }
      products(first: 5) {
        id
        name
        slug
        soldOut
        images(first: 1) {
          url
        }
        categories(first: 1) {
          name
          slug
        }
        collections(first: 1) {
          id
          name
          slug
        }
      }
    }
  }
`;
