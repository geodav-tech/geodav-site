<template>
  <Layout>
    <h1>{{ $page.service.title }}</h1>
    <p class="intro">{{ $page.service.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Service ($id: ID!) {
  service(id: $id) {
    title
    excerpt
  }
}
</page-query>