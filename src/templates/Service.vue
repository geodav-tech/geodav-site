<template>
  <Layout>
    <section class="my-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1 class="mb-4">{{$page.service.title}}</h1>
            <div class="section-header-line" style="margin-left: 0;"></div>
            <VueRemarkContent class="pe-md-3"/>
            <div class="p-4 mx-3 inline-callout text-white">
              <h3 class="text-white">How {{$page.service.title}} Can Help Your Business:</h3>
              <ul class="ms-2" style="font-size: 1.3rem">
                <li v-for="(text, ind) in $page.service.summary" :key="`${ind}${text}`" v-html="text" />
              </ul>
            </div>
            <h3 class="my-5 pe-4">Client Success With {{$page.service.title}}:</h3>
            <div class="row pe-md-3">
              <portfolio-item-card v-for="({node}, ind) in $page.service.belongsTo.edges" :key="`${ind}${node.id}`" :portfolioItem="node" />
            </div>
          </div>
          <contact-sidebar
            :spanCallout="$page.service.tagline"
            :contactTagline="`Get in touch and let's have a chat about ${$page.service.title.toLowerCase()}!`"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>
<page-query>
query Service ($id: ID!) {
  service(id: $id) {
    title
    tagline
    summary
    coverImage
    belongsTo(sortBy: "weight", order: DESC) {
      edges { 
        node {
          ...on PortfolioItem {
            id
            path
            title
            coverImage     
            tagline
          }
        }
      }
    }
  }
}
</page-query>
<script>
import ContactSidebar from '../components/ContactSidebar'
import PortfolioItemCard from '../components/PortfolioItemCard'

export default {
	components: { PortfolioItemCard, ContactSidebar },
  methods: {
    getRandomPortfolioItem() {
      return this.$page.service.belongsTo.edges[Math.floor(Math.random() * this.$page.service.belongsTo.edges.length)] || {}
    }
  },
  metaInfo() {
    return {
      title: this.$page.service.title,
      meta: [
        // og tags
        {property: 'og:title', content: this.$page.service.title},
        // since these use SVGs as the cover image and og doesn't support that, choose a random related portfolio item and use its image
        {property: 'og:image', content: this.getRandomPortfolioItem().node?.coverImage?.src || ''},
        {property: 'og:description', content: this.$page.service.tagline}
      ]
    }
  }
}
</script>
<style scoped>
.inline-callout {
  background-color: var(--geodav-red);
  border-radius: .25rem;
  width: fit-content;
}
.inline-callout ul {
  font-size: 1.2rem;
}
</style>
