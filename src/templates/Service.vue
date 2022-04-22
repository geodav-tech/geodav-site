<template>
  <Layout>
    <section class="my-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="mb-4">{{$page.service.title}}</h1>
            <div class="section-header-line" style="margin-left: 0;"></div>
          </div>
          <div class="col-md-8">
            <VueRemarkContent class="pe-md-3"/>
            <div class="p-4 mx-3 inline-callout text-white">
              <h3 class="text-white">How {{$page.service.title}} Can Help Your Business:</h3>
              <ul class="ms-2" style="font-size: 1.3rem">
                <li v-for="(text, ind) in $page.service.summary" :key="`${ind}${text}`" v-html="text" />
              </ul>
            </div>
            <h3 class="my-5 pe-4">Client Success With {{$page.service.title}}:</h3>
            {{$page.service.belongsTo.edges}}
          </div>
          <div class="col-md-4 p-3 side-bar">
            <span-callout>
              {{$page.service.tagline}}
            </span-callout>
            <div class="section-header-line my-3"></div>
            <div class="mb-3 bold contact-tagline text-center">
              Get in touch and let's have a chat about {{$page.service.title.toLowerCase()}}!
            </div>
            <contact-form/>
          </div>
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
    belongsTo {
      edges { 
        node {
          ...on PortfolioItem {
            title
            coverImage     
            tagline
            servicesUsed {
              id
            }
          }
        }
      }
    }
  }
}
</page-query>
<script>
import ContactForm from '../components/ContactForm.vue'
import SpanCallout from '../components/SpanCallout'

export default {
	components: { SpanCallout, ContactForm },
  metaInfo() {
    return {
      title: this.$page.service.title
    }
  }
}
</script>
<style scoped>
.side-bar {
  /* this is a lighter geodav-grey */
  background-color: #7f7f7f14;
  border-radius: .25rem;
}
.contact-tagline {
  font-size: 1.2rem;
  color: var(--geodav-red);
}
.inline-callout {
  background-color: var(--geodav-red);
  border-radius: .25rem;
  width: fit-content;
}
.inline-callout ul {
  font-size: 1.2rem;
}
</style>
