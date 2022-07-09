<template>
  <Layout>
    <section class="my-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="mb-4">Client Data in Action</h1>
            <div class="section-header-line" style="margin-left: 0;"></div>
          </div>
          <div class="col-12 mb-5 text-center">
            <span
              v-for="tag in serviceTags" :key="tag"
              class="badge filter m-2"
              :class="{selected: tag === currentFilter}"
              @click="currentFilter = tag"
            >
              {{tag}}
            </span>
          </div>
        </div>
        <!-- wrap ALL portfolio items in a div so they can all transition together -->
        <div class="row" :class="{'fade-out': filterIsRunning, 'fade-in': !filterIsRunning}">
          <portfolio-item-card
            v-for="{node: portfolioItem} in filteredItems"
            :key="portfolioItem.id"
            :portfolioItem="portfolioItem"
            colClasses="col-lg-4 col-md-6"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  portfolioItems: allPortfolioItem(sortBy: "weight", order: DESC) {
    edges {
      node {
        id
        path
        title
        coverImage
        tagline
        servicesUsed(sortBy: "index", order: ASC) {
          id
        }
      }
    }
  }
}
</page-query>

<script>
import PortfolioItemCard from '../components/PortfolioItemCard'
export default {
	components: { PortfolioItemCard },
  metaInfo() {
    return {
      title: 'Portfolio',
      meta: [
        // og tags
        {property: 'og:title', content: 'Check Out Some of Our Past Work!'},
        {property: 'og:image', content: require('../portfolio/colorado-avalanche-information-center-dashboard/caic-avalanche-explorer.png')},
        {property: 'og:description', content: 'We have more than 30 satisfied clients and over 10 years of experience!'}
      ]
    }
  },
  data() {
    return {
      currentFilter: 'all',
      filterIsRunning: false
    }
  },
  computed: {
    serviceTags() {
      // gets an array of unique service tags from the portfolio items loaded by graphql, plus an option for "all"
      let tags = ['all'].concat(Array.from(
        new Set(this.$page.portfolioItems.edges.map(({node}) => node.servicesUsed.map(service => service.id)).flat())
      ))

      // remove extra hyphens and send it out the door.
      return tags.map(tag => tag.replace(/-/g, ' '))
    },
    filteredItems() { // filter to return just the portfolio items that make use of the selected service
      if (this.currentFilter === 'all') {
        return this.$page.portfolioItems.edges
      }
        return this.$page.portfolioItems.edges.filter(({node}) => 
          node.servicesUsed.map(service => service.id).includes(this.currentFilter.replace(/ /g, '-'))
        )
    }
  },
  watch: {
    currentFilter() { // when current filter changes, fade out all portfolio items and fade in with new ones.
      this.filterIsRunning = true
      setTimeout(() => {
        this.filterIsRunning = false
      }, 250);
    }
  }
}
</script>
<style scoped>
.filter {
  border: 2px solid var(--geodav-red);
  color: black;
  cursor: pointer;
}
.filter.selected {
  background-color: var(--geodav-red);
  color: white;
}
.fade-in {
  transition: all 0.25s ease;
  opacity: 1;
}
.fade-out {
  opacity: 0;
}
</style>
