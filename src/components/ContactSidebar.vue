<template>
  <div :class="colClasses" class="p-0">
    <slot/>
    <div class="p-3 side-bar">
      <span-callout>
        {{spanCallout}}
      </span-callout>
      <div class="section-header-line my-3"></div>
      <div class="mb-3 bold contact-tagline text-center">
        {{contactTagline}}
      </div>
      <contact-form/>
    </div>
  </div>
</template>
<script>
import ContactForm from '../components/ContactForm'
import SpanCallout from '../components/SpanCallout'

export default {
	components: { SpanCallout, ContactForm },
  props: {
    spanCallout: String,
    contactTagline: String,
    colClasses: { // bootstrap col sizes; get plugged in as classnames
      type: String,
      default: 'col-md-4'
    }
  }
}
</script>
<style scoped>
.side-bar {
  /* this is a lighter geodav-grey */
  background-color: #7f7f7f14;
  border-radius: .25rem;
  height: fit-content;
}
.contact-tagline {
  font-size: 1.2rem;
  color: var(--geodav-red);
}
</style>