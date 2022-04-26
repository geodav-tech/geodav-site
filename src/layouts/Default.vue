<template>
  <div>
    <header>
      <!-- <div class="bg-warning py-3" style='display: none;'>
        <div class="container">
          additional CTA could hang out here some day.
        </div>
      </div> -->
      <nav id="navbar-top" class="navbar navbar-expand-lg navbar-dark" :class="{'permanent-dark-top': showNavbarBackground}">
        <div class="container">
          <g-link class="navbar-brand" to="/">
            <img src="../assets/media/logos/ours/logo_with_name_horizontal.svg" class="logo" alt="" loading="lazy" style="height: 58px" />
          </g-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main-nav">
            <ul class="navbar-nav ms-auto heading-font">
              <li class="nav-item">
                <g-link class="nav-link" to="/about/">About</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/services/">Services</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/portfolio/">Portfolio</g-link>
              </li>
              <li class="nav-item">
                <g-link class="nav-link" to="/contact/">Contact</g-link>
              </li>
              <li class="nav-item mt-1">
                <primary-cta/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <slot/>
    <footer>
      <section id="footer-cta">
        <div class="container-fluid px-0">
          <div class="row mt-5 mx-0" style="background-color: var(--geodav-grey)">
            <div class="col-12 text-center my-5">
              <h1>Ready to solve your data problems?</h1>
              <primary-cta/>
            </div>
          </div>
        </div>
      </section>
      <section id="footer" class="py-5 px-4">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <img src="../assets/media/logos/ours/logo_with_name_horizontal.svg" class="logo img img-fluid" alt="" loading="lazy" style="height: 58px" />
              <p class="mt-1">
                geodav.tech builds intuitive web & mobile apps that transform your complex data into powerful interactive dashboards that allow you &
                your team to make faster and more informed decisions.
              </p>
            </div>
            <div class="col-md-6 col-lg-3 pt-3">
              <h3>Contact</h3>
              <p>
                <span class="icon-spacer">✉️ </span><a href="mailto:hello@geodav.tech">hello@geodav.tech</a><br>
                <span class="icon-spacer">📅 </span><a href="https://calendly.com/geodavtech-mike/lets-build-something-cool-together">Book a meeting</a><br>
                <span class="icon-spacer">🗺 </span>Grand Junction, Colorado<br>
              </p>
            </div>
            <div class="col-md-6 col-lg-3 pt-3">
              <h3>Navigation</h3>
              <p>
                <g-link to="/">Home</g-link><br>
                <g-link to="/about/">About</g-link><br>
                <g-link to="/services/">Services</g-link><br>
                <g-link to="/portfolio/">Portfolio</g-link><br>
                <g-link to="/contact/">Contact</g-link><br>
              </p>
            </div>
            <div class="col-md-6 col-lg-3 pt-3">
              <h3>Services</h3>
              <ul>
                <!-- these should be pulled from graphql when a dataviz page is made -->
                <li><g-link to="/services/interactive-dashboards/">Data visualization & analysis</g-link></li>
                <li><g-link to="/services/interactive-dashboards/">Interactive dashboards</g-link></li>
                <li><g-link to="/services/web-design-and-development/">Web design & development</g-link></li>
                <li><g-link to="/services/mobile-app-development/">Mobile app development</g-link></li>
                <li><g-link to="/services/systems-integration/">Systems integration</g-link></li>
                <li><g-link to="/services/interactive-maps/">Interactive maps</g-link></li>
              </ul>
            </div>
            <div class="col-12 text-center">
              geodav.tech, LLC © {{year}}
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: {
    showNavbarBackground: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: () => ({
    year: new Date().getFullYear()
  }),
  mounted() {
    // fix the navbar to the top when you scroll.
    window.addEventListener('scroll', this.scrollHandler)

    // set up the mobile menu
    document.querySelector('.navbar-toggler-icon').onclick = () => {
      document.querySelector('#main-nav').classList.toggle('show')
      document.querySelector('#navbar-top').classList.toggle('togglable-dark-top')
    }
  },
  beforeDestroy() {
    // remove these for good housekeeping
    window.removeEventListener('scroll', this.scrollHandler)
    document.querySelector('.navbar-toggler-icon').onclick = null
  },
  methods: {
    scrollHandler() {
      if (window.scrollY > 300) {
        document.getElementById('navbar-top').classList.add('fixed-top')
        // add padding top to show content behind navbar
        let navbarHeight = document.querySelector('.navbar').offsetHeight
        document.body.style.paddingTop = navbarHeight + 'px'
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top')
        // remove padding top from body
        document.body.style.paddingTop = '0'
      }
    }
  }
}
</script>

<style scoped>
/*navbar css*/
.fixed-top {
  top: -110px;
  transform: translateY(110px);
  transition: transform .5s;
}
#navbar-top {
  z-index: 3;
}
#navbar-top.fixed-top, #navbar-top.togglable-dark-top, #navbar-top.permanent-dark-top  {
  background: rgba(41, 55, 66, 0.8);
}
#navbar-top > .container {
  padding-top: 12px;
  padding-bottom: 12px;
}
#main-nav .navbar-nav li > a:not(.btn){
  font-weight: 700;
  font-size: 18px;
  color: white;
}
#main-nav .navbar-nav li > a.nav-link:hover {
  color: var(--geodav-red);
}
.nav-item {
  padding: 0 15px;
}
.navbar-toggler {
  border-width: 3px;
}
#main-nav .navbar-nav li > a.nav-link.active--exact {
  text-decoration: underline;
  text-decoration-color: var(--geodav-red);
  text-decoration-thickness: 3px;
}
/* footer css*/
#footer-cta h1 {
  margin-bottom: 15px;
  color: white;
}
.icon-spacer {
  margin-right: 5px;
}
</style>
