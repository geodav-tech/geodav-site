<template>
  <Layout :showNavbarBackground=false>
    <section id='fullwidth-video'>

      <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
      <div class="overlay"></div>

      <!-- The HTML5 video element that will create the background video on the section -->
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="../assets/media/videos/productivity.mp4" type="video/mp4">
      </video>

      <!-- The section content -->
      <div class="container h-100 px-4">
        <div class="d-flex h-100 text-left align-items-center">
          <div class="text-white" style="max-width: 650px;">
            <h1 class='video-header'>
              We build dashboards to efficiently visualize & analyze your data
            </h1>
            <p class="wb-75 video-subheader">
              Web & mobile app agency
            </p>
            <secondary-cta text="Portfolio" route="/portfolio/"/>
            <primary-cta style='margin-left: 16px;' />
          </div>
        </div>
        <div class="text-center" style="height: 80px; margin-top: -80px;">
          <svg-icon icon="@mdiChevronDownCircleOutline" class="mdi-down-chevron" stroke-width="0.1"/>
        </div>
      </div>
    </section>
    <!-- spacer for content below video, 108px is navbar height. -->
    <div style="padding-top: calc(100vh - 108px);"></div>

    <!-- Page section example for content below the video header -->
    <section id="what-we-do" class="py-5 px-4" style="background-color: #e9ecef;">
      <div class="container">
        <div class="row text-center">
          <h1 class="mb-4">What We Do</h1>
          <div class="section-header-line"></div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-3" v-for="service in $page.services.edges" :key="service.node.id">
            <div class="card h-100 animate__animated animate__fadeInUp wow" :class="`animate-delay-${service.node.index * 200}ms`">
              <g-link :to="service.node.path">
                <div class="card-body text-center">
                  <h4 class="card-title my-4">{{service.node.title}}</h4>
                  <img class="mb-4 px-3 img-fluid" :src="require(`../assets/media/images/${service.node.coverImage}`)" alt="" loading="lazy" />
                  <p class="card-text mb-4">
                    {{service.node.tagline}}
                  </p>
                </div>
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="who-we-are" class="pt-5" style="position: relative;">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-none d-md-block">
            <g-image id="laptop-img" class="wow animate__animated animate__fadeInLeft" src="../assets/media/images/laptop.png" alt="" loading="lazy" />
          </div>
          <div class="col-md-6 px-5">
            <div class="wow animate__animated animate__fadeInRight animate-delay-200ms">
              <h1 class="mb-4">Who We Are</h1>
              <div class="section-header-line" style="margin-left: 0;"></div>
            </div>
            <p class="wow animate__animated animate__fadeInRight animate-delay-400ms">
              geodav.tech is a software development agency specialized in creating web pages and mobile applications to help you
              make faster and more informed decisions. Based in Grand Junction, Colorado, we have over 10 years of experience
              providing quality software solutions across Western Colorado and around the United States.
              <br><br>
              <primary-cta/>
            </p>
          </div>
        </div>
      </div>
      <div class="container-fluid px-0">
        <div class="row mt-5 mx-0" style="background-color: var(--geodav-red)">
          <div class="row py-4">
            <div class="col-md-6 d-none d-md-block"></div>
            <div class="col-md-6 ps-5">
              <div class="row px-3">
                <div class="col-md-4 ps-4 my-md-5 py-2 counter-box animate__animated animate__fadeInUp wow">
                  <h2>30+</h2>
                  <span class="label">HAPPY CLIENTS</span>
                </div>
                <div class="col-md-4 ps-4 my-md-5 py-2 counter-box animate__animated animate__fadeInUp wow animate-delay-200ms">
                  <h2>10+</h2>
                  <span class="label">YEARS EXPERIENCE</span>
                </div>
                <div class="col-md-4 ps-4 my-md-5 py-2 counter-box animate__animated animate__fadeInUp wow animate-delay-400ms">
                  <h2>1.5 million</h2>
                  <span class="label">LINES OF CODE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="logo-farm" class="py-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6 px-4">
            <h1 class="mb-4">Trusted By</h1>
            <div class="section-header-line" style="margin-left: 0;"></div>
          </div>
        </div>
        <div class="row d-flex flex-wrap align-items-center justify-content-center wow animate__animated animate__zoomIn">
          <div class="col-3 col-lg-2">
            <a href="https://www.brown.edu/">
              <g-image class="img-fluid" loading="lazy" src="../assets/media/logos/others/brown.png" alt="Brown University" />
            </a>
          </div>
          <div class="col-3 col-lg-1">
            <a href="https://jfsconsultingco.com/">
              <g-image class="img-fluid" loading="lazy" src="../assets/media/logos/others/jfs.png" alt="Johnston Financial Services" />
            </a>
          </div>
          <div class="col-3 col-lg-2">
            <a href="https://www.avalanche.state.co.us/">
              <g-image class="img-fluid" loading="lazy" src="../assets/media/logos/others/caic.png" alt="Colorado Avalanche Information Center" />
            </a>
          </div>
          <div class="col-3 col-lg-2">
            <a href="https://eurekasciencemuseum.org/">
              <g-image class="img-fluid" loading="lazy" src="../assets/media/logos/others/eureka.png" alt="Eureka McConnell Science Museum" />
            </a>
          </div>
          <div class="col-3 col-lg-2">
            <a href="https://fieldgeoservices.com/">
              <g-image class="img-fluid" loading="lazy" src="../assets/media/logos/others/fgs.png" alt="Field Geo Services" />
            </a>
          </div>
          <div class="col-3 col-lg-2">
            <a href="https://www.intermx.com/">
              <g-image class="img-fluid" loading="lazy" src="../assets/media/logos/others/intermx.png" alt="Intermx" />
            </a>
          </div>
          <div class="col-3 col-lg-1">
            <a href="https://www.kaart.com">
              <g-image class="img-fluid" loading="lazy" src="../assets/media/logos/others/kaart.png" alt="Kaart" />
            </a>
          </div>
          <div class="col-3 col-lg-2">
            <a href="https://www.gomercatus.com/">
              <g-image class="img-fluid" loading="lazy" src="../assets/media/logos/others/mercatus.png" alt="Mercatus" />
            </a>
          </div>
          <div class="col-3 col-lg-1">
            <a href="https://www.nps.gov/">
              <g-image class="img-fluid" loading="lazy" src="../assets/media/logos/others/nps.png" alt="National Park Service" />
            </a>
          </div>
          <div class="col-3 col-lg-2">
            <a href="https://passur.com/">
              <g-image class="img-fluid" loading="lazy" src="../assets/media/logos/others/passur.jpeg" alt="Passur Aerospace" />
            </a>
          </div>
          <div class="col-3 col-lg-2">
            <a href="https://www.solimarinternational.com/">
              <g-image class="img-fluid" loading="lazy" src="../assets/media/logos/others/solimar.png" alt="Solimar International" />
            </a>
          </div>
          <div class="col-3 col-lg-2">
            <a href="https://www.telluride-co.gov/">
              <g-image class="img-fluid" loading="lazy" src="../assets/media/logos/others/telluride.png" alt="Town of Telluride, Colorado" />
            </a>
          </div>
          <div class="col-4 col-lg-2 text-center">
            <h3>& more!</h3>
          </div>
        </div>
      </div>
    </section>

    <section id="case-studies" class="py-5 px-4" style="background-color: #e9ecef;">
      <div class="container">
        <div class="row text-center">
          <h1 class="mb-4">Client Success Stories</h1>
          <div class="section-header-line"></div>
        </div>
        <div class="row animate__animated wow animate__fadeInRight">
          <div class="col-lg-4 col-md-6 mb-3">
            <div class="card h-100 bg-dark text-white">
              <g-link to="/portfolio/caic-interactive-dashboard/">
                <g-image loading="lazy" src="../assets/media/images/caic.jpeg" class="card-img" alt="..." />
                <div class="card-img-overlay d-flex flex-column">
                  <h5 class="card-title mt-auto">Colorado Avalanche Information Center</h5>
                  <p class="card-text">
                    Interactive dashboard to allow avalanche forecasters to easily analyze recent avalanches.
                  </p>
                </div>
              </g-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-3">
            <div class="card h-100 bg-dark text-white">
              <g-link to="/portfolio/intermx-interactive-map/">
                <g-image loading="lazy" src="../assets/media/images/intermx-pop-data.png" class="card-img" alt="..." />
                <div class="card-img-overlay d-flex flex-column">
                  <h5 class="card-title mt-auto">Intermx</h5>
                  <p class="card-text">
                    Web app to display Intermx's complex population movement data in easily-digestable, visually-appealing, dynamic maps.
                  </p>
                </div>
              </g-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-3">
            <div class="card h-100 bg-dark text-white">
              <g-link to="/portfolio/fgs-well-log-analysis/">
                <g-image loading="lazy" src="../assets/media/images/fgs.jpg" class="card-img" alt="..." />
                <div class="card-img-overlay d-flex flex-column">
                  <h5 class="card-title mt-auto">Field Geo Services</h5>
                  <p class="card-text">
                    Web app to process and visualize well log data, allowing real-time collaboration among geolgists at well sites across the nation.
                  </p>
                </div>
              </g-link>
            </div>
          </div>
          <div class="col-12 text-center mb-3">
            <secondary-cta route="/portfolio/" text="See More" style="background-color: var(--geodav-grey);"/>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" class="pt-4 px-4">
      <div class="container">
        <div class="row mt-5 testimonial-row animate__animated wow animate__slideInLeft">
          <testimonial-card
            name="Aaron Young"
            url="https://kaart.com"
            title="CEO at Kaart"
            quote="geodav.tech understood our needs quickly and delivered projects on time and within budget. 100% I would work with them again!"
            :starCount=5
          >
            <g-image src="../assets/media/images/aaron.jpg" class="rounded-avatar"/>
          </testimonial-card>
        </div>
        <div class="row mt-5 testimonial-row animate__animated wow animate__slideInRight">
          <testimonial-card
            class="offset-md-6"
            name="Mike Cooperstein"
            url="https://www.avalanche.state.co.us/"
            title="Colorado Avalanche Information Center"
            quote="We worked with geodav to create a dashboard that is used by forecasters and the public to view the distribution of avalanches."
            :starCount=5
          >
            <g-image src="../assets/media/images/coop.jpeg" class="rounded-avatar"/>
          </testimonial-card>
        </div>
        <div class="row mt-5 mb-5 testimonial-row animate__animated wow animate__slideInLeft">
          <testimonial-card
            name="Matthew Martimo"
            url="https://www.intermx.com/"
            title="Cofounder at Intermx"
            quote="They dig in, understand the problem, and work with us collaboratively to find and execute a solution. And they are fun to work with! Great people. Super smart. Very patient and competent."
            :starCount=5
          >
            <g-image src="../assets/media/images/matthew.jpeg" class="rounded-avatar"/>
          </testimonial-card>
        </div>
      </div>
    </section>

    <section id="how-to-start" class="py-5" style="background-color: #e9ecef;">
      <div class="container">
        <div class="row text-center">
          <h1 class="mb-4">How To Start</h1>
          <div class="section-header-line"></div>
        </div>
        <div class="row px-4">
          <!-- 0 delay -->
          <div class="col-lg-3 col-md-6 mb-3 px-3">
            <div class="h-100 animate__animated animate__fadeInUp wow">
              <h1>1. Scoping</h1>
              <p class="action-item">
                Let's meet and explore your needs— consultations are free!
              </p>
            </div>
          </div>
          <!-- 200 delay -->
          <div class="col-lg-3 col-md-6 mb-3 px-3">
            <div class="h-100 animate__animated animate__fadeInUp wow animate-delay-200ms">
              <h1>2. Thinking</h1>
              <p class="action-item">
                We'll come back with potential solutions and present them.
              </p>
            </div>
          </div>
          <!-- 400 delay -->
          <div class="col-lg-3 col-md-6 mb-3 px-3">
            <div class="h-100 animate__animated animate__fadeInUp wow animate-delay-400ms">
              <h1>3. Selection</h1>
              <p class="action-item">
                Choose the option that's best for you and we'll build it.
              </p>
            </div>
          </div>
          <!-- 600 delay -->
          <div class="col-lg-3 col-md-6 mb-3 px-3">
            <div class="h-100 animate__animated animate__fadeInUp wow animate-delay-600ms">
              <h1>4. Success!</h1>
              <p class="action-item">
                Use your new tools to run your business like never before!
              </p>
            </div>
          </div>
          <div class="col-12 text-center">
            <primary-cta/>
          </div>
        </div>
      </div>
    </section>

    <section id="guarantee" class="pt-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img class="wow animate__animated animate__fadeInLeft img-fluid" src="../assets/media/images/satisfaction-guaranteed.svg"
              alt="" loading="lazy" />
          </div>
          <div class="col-md-6 px-4">
            <div class="wow animate__animated animate__fadeInRight">
              <h1 class="mb-4">1, 2, 3 Guarantee</h1>
              <div class="section-header-line" style="margin-left: 0;"></div>
            </div>
            <p>
              <ul class="guarantee-items">
                <li class="wow animate__animated animate__fadeInRight animate-delay-200ms">
                  We're with you every step of the way, even after the project is completed.
                </li>
                <li class="wow animate__animated animate__fadeInRight animate-delay-400ms">
                  We'll check in <b class="text-black">1, 2, and 3 months</b> after
                  you've started using your new tools to make sure you're <u>completely satisfied</u> and that everything is working as
                  intended.
                </li>
                <li class="wow animate__animated animate__fadeInRight animate-delay-600ms">
                  Our entire team is <b class="text-black">based in Western Colorado</b> and we're always just an email or a phone call away!
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  services: allService(filter: { index: { in: [0, 1, 2, 3] }}, sortBy: "index", order: ASC) {
    edges {
      node {
        id
        title
        tagline
        coverImage
        path
        index
      }
    }
  }
}
</page-query>

<script>
import TestimonialCard from '../components/TestimonialCard'
import SecondaryCta from '~/components/SecondaryCta'
import SvgIcon from '~/components/SvgIcon'

export default {
	components: { TestimonialCard, SecondaryCta, SvgIcon },
  metaInfo: {
    title: 'Interactive Dashboards & More'
  }
}
</script>

<style scoped>
/*video section css*/
#fullwidth-video {
  position: absolute;
  top: 0;
  background-color: black;
  height: 100vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}
#fullwidth-video video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
#fullwidth-video .container {
  position: relative;
  z-index: 2;
}
#fullwidth-video .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}
#fullwidth-video .video-header {
  font-size: 50px;
  color: white;
}
#fullwidth-video .video-subheader {
  text-transform: uppercase;
  line-height: 22px;
  letter-spacing: 10px;
  font-weight: 600;
  font-size: 16px;
}
#fullwidth-video .mdi-down-chevron {
  color: white;
  fill: white;
  width: 50px;
  height: 50px;
}

/*what we do section css*/
#what-we-do .card, #case-studies .card {
  border: none;
  transition: all .25s ease;
}
#what-we-do .card:hover, #case-studies .card:hover {
  box-shadow: 0 12px 70px rgb(119 119 119 / 30%);
  margin-top: -20px;
}
#what-we-do .card > a {
  text-decoration: none;
  color: var(--geodav-grey);
}
#what-we-do .card img {
  height: 200px;
}

/*who we are section css*/
#who-we-are #laptop-img {
  right: 50%;
  position: absolute;
  height: calc(100% - 3rem);
  width: auto;
}
#who-we-are .counter-box {
  border-left: 1px solid white;
  color: white;
}
#who-we-are .counter-box > h2 {
  color: white;
  margin-bottom: 0;
}
#who-we-are .counter-box > .label {
  padding-top: 1px;
  letter-spacing: 0.5px;
  margin-top: 11px;
  text-transform: uppercase;
  line-height: 16px;
  font-size: 12px;
}

/*logo farm section css*/
#logo-farm img {
  filter: grayscale(100%);
  transition: all .25s ease;
}
#logo-farm img:hover {
  filter: grayscale(0);
}

/*case studies section css*/
#case-studies .card-img-overlay {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
}
#case-studies .card h5 {
  color: white;
}
#case-studies .card > a {
  text-decoration: none;
  color: white;
}

/*testimonials css*/
@media (min-width: 768px) {
  .testimonial-row:not(:nth-child(1)) {
      margin-top: -9rem !important;
  } 
}

/*how to start css*/
#how-to-start .action-item {
  font-size: 24px;
  color: #333333;
  padding: 10px 10px 10px 20px;
}

/* guarantee css*/
#guarantee .guarantee-items > li {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>
