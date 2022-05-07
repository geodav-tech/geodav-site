<template>
  <div class="col-md-6 text-center testimonial-col">
    <div class="rounded-avatar">
      <g-image :src="photo" :alt="`${name}, ${title}`" loading="lazy" />
    </div>
    <h5>{{name}}</h5>
    <b><a :href="url">{{title}}</a></b>
    <br>
    <span class="d-flex mw-100">
      <svg-icon icon="@mdiFormatQuoteOpen" class="mdi-format-quote-open h-auto" style="min-width: 24px;"/>
      <p>
        {{quote}}
      </p>
    </span>
    <span v-for="(e, i) in starCount" :key="i">
      <svg-icon icon="@mdiStar" class="mdi-star"/>
    </span>
  </div>
</template>

<script>
import SvgIcon from '~/components/SvgIcon'

export default {
  name: 'TestimonialCard',
  components: { SvgIcon },
  props: {
    name: String,
    url: String,
    title: String,
    quote: String,
    starCount: Number,
    photo: Object
  }
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
