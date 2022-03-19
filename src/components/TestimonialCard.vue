<template>
  <div class="col-md-6 text-center testimonial-col">
    <!-- g-image must be loaded via slot due to bug: https://github.com/gridsome/gridsome/issues/292 -->
    <div class="rounded-avatar">
      <slot></slot>
    </div>
    <h5>{{name}}</h5>
    <b><a :href="url">{{title}}</a></b>
    <br>
    <span style="display: inline-flex;">
      <svg-icon :iconFile="quoteIcon" class="mdi-format-quote-open" style="min-width: 24px;"/>
      <p>
        {{quote}}
      </p>
    </span>
    <span v-for="(e, i) in starCount" :key="i">
      <svg-icon :iconFile="starIcon" class="mdi-star"/>
    </span>
  </div>
</template>

<script>
import { mdiStar, mdiFormatQuoteOpen } from '@mdi/js'

export default {
  name: 'TestimonialCard',
  props: {
    name: String,
    url: String,
    title: String,
    quote: String,
    starCount: Number
  },
  data: () => ({
    starIcon: mdiStar,
    quoteIcon: mdiFormatQuoteOpen,
  })
}
</script>
<style scoped>
.rounded-avatar > img {
  -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
  max-width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.testimonial-col .mdi-format-quote-open {
  color: var(--geodav-grey);
  fill: var(--geodav-grey);
  width: 100px;
  height: 100px;
}
.testimonial-col .mdi-star {
  color: #ff9800;
  fill: #ff9800;
  width: 40px;
  height: 40px;
}
.testimonial-col p {
  padding-top: 15px;
  font-size: 24px;
}
</style>
