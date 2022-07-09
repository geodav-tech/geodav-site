<template>
  <Layout>
    <section class="my-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-none d-md-block">
            <img class="p-5 img-fluid" src="../assets/media/images/contact-us.svg" alt="" loading="lazy" />
          </div>
          <div class="col-md-6">
            <h1 class="mb-4">How Can We Help You?</h1>
            <div class="section-header-line" style="margin-left: 0;"></div>
            <p>
              We're looking forward to chatting about how we can make your life easier! <a href="mailto:hello@geodav.tech">Send an email</a>, <a href="https://calendly.com/geodavtech-mike/lets-build-something-cool-together">book a meeting</a>, or fill out the form below and we'll be in touch as soon as possible.
            </p>
            <contact-form/>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import ContactForm from '../components/ContactForm'
export default {
	components: { ContactForm },
  metaInfo() {
    return {
      title: 'Contact',
      meta: [
        // og tags
        {property: 'og:title', content: 'How Can We Help You? Let’s Talk!'},
        {property: 'og:image', content: require('../assets/media/images/productivity.jpg')},
        {property: 'og:description', content: 'We’re looking forward to chatting about how we can enrich your business and make your life easier!'},
        {name: 'description', content: 'We’re looking forward to chatting about how we can enrich your business and make your life easier!'}
      ]
    }
  },
  data: () => ({
    hasBeenSubmitted: false
  }),
  methods: {
    onFormSubmit() {
      if (window._hsp === undefined) { // adblock blocked our hubspot forms
        alert('There was an error submitting the form. Please try again or send us email at hello@geodav.tech.')
      } else {
        this.hasBeenSubmitted = true
      }
    }
  }
}
</script>
