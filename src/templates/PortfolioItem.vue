<template>
  <Layout>
    <h1>{{ $page.portfolioItem.title }}</h1>
    <p class="intro">{{ $page.portfolioItem.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query PortfolioItem ($id: ID!) {
  portfolioItem(id: $id) {
    title
    excerpt
  }
}
</page-query>