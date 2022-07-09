<template>
  <Layout>
    <section class="my-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="mb-4">Services Designed to Support You</h1>
            <div class="section-header-line" style="margin-left: 0;"></div>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-md-6 mb-4" v-for="service in $page.services.edges" :key="`svc${service.node.id}`">
            <div class="card h-100 animate__animated animate__fadeInUp" :class="`animate-delay-${service.node.index * 200}ms`">
              <g-link :to="service.node.path" class="h-100">
                <div class="card-body text-center h-100 d-flex flex-column">
                  <h3 class="card-title my-3">{{service.node.title}}</h3>
                  <h6 class="mb-4 mx-4">{{service.node.tagline}}</h6>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <img class="img-fluid" :src="require(`../services/${service.node.id}/${service.node.coverImage}`)" alt="" loading="lazy" />
                    </div>
                    <div class="col-md-6 mb-1">
                      <p class="card-text text-start">
                        <ul>
                          <li v-for="(text, ind) in service.node.summary" :key="`${ind}${text}`" v-html="text" />
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div class="row mt-auto">
                    <div class="col-12 mb-2">
                      <span :to="service.node.path" class="read-more-link">
                        Read More
                      </span>
                    </div>
                  </div>
                </div>
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  services: allService(sortBy: "index", order: ASC) {
    edges {
      node {
        id
        path
        title
        tagline
        summary
        coverImage
        index
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Services'
  }
}
</script>
<style scoped>
.card > a {
  text-decoration: none;
  color: var(--geodav-grey);
}
.card img {
  height: 200px;
}
.read-more-link {
  font-family: 'Montserrat';
  font-size: 1.2rem;
  color: var(--geodav-red);
  text-decoration: underline;
}
.read-more-link:hover {
  color: var(--geodav-grey);
}
</style>
