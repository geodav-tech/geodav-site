<template>
  <Layout>
    <section class="my-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1 class="mb-4">{{$page.portfolioItem.title}}</h1>
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
              <div class="row d-flex justify-content-center mb-4 mx-auto pe-md-3 align-items-center">
                <div class="col-md-4 p-2" v-for="(image, index) in $page.portfolioItem.additionalImages" :key="index + image.src">
                  <expandable-image loading="lazy" class="img-fluid img-thumbnail" :src="image" :alt="$page.portfolioItem.title" />
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

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

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
import ExpandableImage from '../components/ExpandableImage'
import PrimaryCta from '../components/PrimaryCta'
import TestimonialCard from '../components/TestimonialCard'

export default {
	components: { ContactSidebar, PrimaryCta, TestimonialCard, ExpandableImage },
  metaInfo() {
    return {
      title: this.$page.portfolioItem.title,
      meta: [
        // og tags
        {property: 'og:title', content: `Portfolio: ${this.$page.portfolioItem.title}`},
        {property: 'og:image', content: this.$page.portfolioItem.coverImage.src},
        {property: 'og:description', content: this.$page.portfolioItem.tagline},
        {name: 'description', content: this.$page.portfolioItem.tagline}
      ],
      //Some ld+json tags
      script: [
        // getting disgustingly react-y here... if there's a portfolio item, include this object. if not, send an empty obj.
        this.$page.portfolioItem.testimonial ? {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'LocalBusiness',
            name: 'geodav.tech',
            image: this.$static.metadata.siteUrl + require('../assets/media/logos/ours/square-logo-180x180.png'),
            email: 'hello@geodav.tech',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Grand Junction',
              addressRegion: 'Colorado',
              postalCode: '81501',
              addressCountry: 'US'
            },
            review: {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: this.$page.portfolioItem.testimonial?.starCount + '', // coax to string. not sure if needed.
                bestRating: '5'
              },
              author: {
                '@type': 'Person',
                name: this.$page.portfolioItem.testimonial?.name
              },
              reviewBody: this.$page.portfolioItem.testimonial?.quote
            }
          }
        } : {}
      ]
    }
  }
}
</script>