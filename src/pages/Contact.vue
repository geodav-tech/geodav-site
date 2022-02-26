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
            <form id="geodav-contact-form" @submit.prevent="onFormSubmit">
              <div class="mb-3">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" required>
              </div>
              <div class="mb-3">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" required>
              </div>
              <div class="mb-2">
                <label for="budget-select">Estimated budget</label>
                <select class="form-select" id="budget-select" aria-describedby="budget-select-help">
                  <option selected>Under $10k</option>
                  <option>$10k to $25k</option>
                  <option>$25k to $50k</option>
                  <option>$50k to $100k</option>
                  <option>$100k+</option>
                </select>
                <div id="budget-select-help" class="form-text">We'll work within these constraints.</div>
              </div>
              <div class="mb-4">
                <label for="proj-desc">Project description</label>
                <textarea class="form-control" id="proj-desc" rows="3"></textarea>
              </div>
              <button v-show="!hasBeenSubmitted" type="submit" class="btn submit-btn">Submit</button>
              <p v-show="hasBeenSubmitted">
                Thank you for reaching out! We'll be in touch as soon as possible.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
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

<style scoped>
/* yes, this css is the same as the primary CTA. ugh */
.submit-btn {
  font-weight: 700;
  font-family: 'Montserrat';
  font-size: 18px;
  color: #fff;
  background-color: var(--geodav-red);
  border-color: var(--geodav-red);
}
.submit-btn:hover {
  color: #fff;
  opacity: 0.8;
}
label {
  color: black;
  font-weight: 600;
}
.form-text {
  margin-top: 0;
}
</style>
