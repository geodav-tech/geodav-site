<template>
  <Layout>
    <section class="my-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="mb-4">WIP SERVICES</h1>
            <div class="section-header-line" style="margin-left: 0;"></div>
          </div>
          <div class="col-md-6">
            <div v-for="service in $page.services.edges" :key="service.node.id">
              {{service.id}}
              {{service}}
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
  services: allService {
    edges {
      node {
        id
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
import SvgIcon from '../components/SvgIcon'
import { mdiChevronRight } from '@mdi/js'
export default {
  metaInfo: {
    title: 'Services'
  },
  components: { SvgIcon },
  data: () => ({
    chevron: mdiChevronRight,
  })
}
</script>
<style scoped>
.mdi-right-chevron {
  color: var(--geodav-red);
  fill: var(--geodav-red);
  width: 100px;
  height: 100px;
}
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
