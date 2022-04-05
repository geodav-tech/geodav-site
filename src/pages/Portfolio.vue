<template>
  <Layout>
    <section class="my-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="mb-4">WIP PORTFOLIO</h1>
            <div class="section-header-line" style="margin-left: 0;"></div>
          </div>
          <div class="col-md-6">
            <div v-for="portfolioItem in $page.portfolio.edges" :key="portfolioItem.node.id">
              {{portfolioItem}}
            </div>
          </div>
          <div class="col-md-6 d-none d-md-block">
            <img class="p-2 img-fluid" src="../assets/media/images/about-geodav-team.svg" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  portfolio: allPortfolioItem {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Portfolio'
  }
}
</script>
<style scoped>
.location-box {
  background-color: var(--geodav-red);
  color: white;
  width: 75%;
}
.location-box > h3 {
  color: white;
}
@media screen and (max-width: 991px) {
  .location-box {
    width: 100%;
  }
}
</style>
