<template>
  <Layout>
    <section class="my-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1 class="mb-4" style="text-wrap: balance;">{{$page.portfolioItem.title}}</h1>
            <div class="section-header-line" style="margin-left: 0;"></div>
            <div class="row">
              <div class="col-lg-6 mb-4 text-center">
                <g-image loading="lazy" class="img-fluid" :src="$page.portfolioItem.coverImage" :alt="$page.portfolioItem.title" />
                <primary-cta
                  v-if="$page.portfolioItem.demoUrl"
                  class="m-3"
                  text="SEE IT IN ACTION!"
                  :route="$page.portfolioItem.demoUrl"
                  target="_blank"
                />
              </div>
              <div class="col-lg-6 mb-4 pe-md-3">
                <h4>{{$page.portfolioItem.tagline}}</h4>
                <ul class="ms-2" style="font-size: 1.3rem">
                  <li
                    v-for="(text, ind) in $page.portfolioItem.summary"
                    :key="`${ind}${text}`"
                    v-html="text"
                    class="mb-2"
                  />
                </ul>
              </div>
              <div class="row d-flex justify-content-center mb-4 mx-auto pe-md-3">
                <div class="col-md-4 p-2" v-for="image in $page.portfolioItem.additionalImages" :key="image.src">
                  <g-image loading="lazy" class="img-fluid img-thumbnail" :src="image" alt="$page.portfolioItem.title" />
                </div>
              </div>
            </div>
            <VueRemarkContent class="pe-md-3"/>
          </div>
          <contact-sidebar
            spanCallout="Can we build something like this to improve your workflows?"
            contactTagline="Get in touch and let's have a chat about how we can help!"
          >
            <testimonial-card
              v-bind="$page.portfolioItem.testimonial"
              class="w-100 p-3 pb-4 mb-4 side-bar-top"
              v-if="$page.portfolioItem.testimonial"
            />
          </contact-sidebar>
        </div>
      </div>
    </section>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query PortfolioItem ($id: ID!) {
  portfolioItem(id: $id) {
    title
    coverImage
    demoUrl
    tagline
    summary
    servicesUsed(sortBy: "index", order: ASC) {
      id
    }
    testimonial {
      name
      url
      title
      quote
      starCount
      photo
    }
    additionalImages
  }
}
</page-query>
<script>
import ContactSidebar from '../components/ContactSidebar'
import PrimaryCta from '../components/PrimaryCta'
import TestimonialCard from '../components/TestimonialCard'

export default {
	components: { ContactSidebar, PrimaryCta, TestimonialCard },
  metaInfo() {
    return {
      title: this.$page.portfolioItem.title
    }
  }
}
</script>