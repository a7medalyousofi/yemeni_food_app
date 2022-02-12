import { request, gql } from 'graphql-request'

const graphApi = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT

// Get Meals
export const getMeals = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            id
            excerpt
            createdAt
            slug
            title
            image {
              url
            }
            categories {
              id
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphApi, query)
  return result.postsConnection.edges
}

// Get Meals Details
export const getMealDetails = async (slug) => {
  const query = gql`
    query GetMealDetails($slug: String!) {
      post(where: { slug: $slug }) {
        id
        excerpt
        createdAt
        slug
        title
        image {
          url
        }
        categories {
          id
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `

  const result = await request(graphApi, query, { slug })
  return result.post
}

// Get Recent Meals
export const getRecentMeals = async () => {
  const query = gql`
    query GetRecentPostDetails() {
      posts(orderBy: createdAt_DESC, last: 3) {
        slug
        title
        image {
          url
        }
        createdAt
      }
    }
  `
  const result = await request(graphApi, query)
  return result.posts
}

// Get Recent Meals
export const getRelatedMeals = async (categories, slug) => {
  const query = gql`
    query GetRecentPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        slug
        image {
          url
        }
        createdAt
      }
    }
  `
  const result = await request(graphApi, query, { categories, slug })
  return result.posts
}

// Get Categories
export const getCategories = async () => {
  const query = gql`
    query GetCategoies {
      categories(orderBy: createdAt_DESC) {
        name
        slug
      }
    }
  `

  const result = await request(graphApi, query)
  return result.categories
}

export const getFeaturedMeals = async () => {
  const query = gql`
    query GetCategoryPost {
      posts(where: { featuredMeal: true }) {
        image {
          url
        }
        slug
        title
        createdAt
      }
    }
  `
  const result = await request(graphApi, query)

  return result.posts
}

export const getCategoryMeal = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          node {
            slug
            createdAt
            title
            excerpt
            categories {
              slug
              name
            }
            image {
              url
            }
          }
        }
      }
    }
  `

  const result = await request(graphApi, query, { slug })

  return result.postsConnection.edges
}
