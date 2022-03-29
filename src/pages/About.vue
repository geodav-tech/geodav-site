<template>
  <Layout>
    <section class="my-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="mb-4">We Bring Clarity to Your Data</h1>
            <div class="section-header-line" style="margin-left: 0;"></div>
          </div>
          <div class="col-md-6">
            <p>
              <span class="bold text-black">You've already got enough on your plate—</span> you shouldn't be stuck wasting time muddling through Excel sheets and clumsy workflows to try to gain insights from your data.
            </p>
            <span style="display: inline-flex;">
              <svg-icon icon="@mdiChevronRight" class="mdi-right-chevron" style="min-width: 24px; height: auto;"/>
              <h3 class="mb-0">
                We are experts at web development, data analysis, and building powerful, intuitive dashboards.
              </h3>
            </span>
            <p class="mb-0">
              Working alongside your team, we build interactive dashboards so you can understand your data, increase team productivity, and grow your revenue. Our software engineers and design experts have <span class="bold text-black">over 10 years of experience</span> providing business solutions for clients across the United States.
            </p>
          </div>
          <div class="col-md-6 d-none d-md-block">
            <img class="p-2 img-fluid" src="../assets/media/images/about-geodav-team.svg" alt="" loading="lazy" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 text-center">
            <img class="p-5 img-fluid w-75" src="../assets/media/images/geodav-grand-junction-co.svg" alt="" loading="lazy" />
          </div>
          <div class="col-md-6 text-center d-flex align-items-center justify-content-center">
            <div class="location-box p-5">
              <h3>We are always a quick phone call or email away</h3>
              <p style="line-height: 1.5;">
                Our entire team is based in Western Colorado. <span class="bold">We're committed to our clients and don't leave them hanging.</span> We appreciate lasting business relationships!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>
<style scoped>
.mdi-right-chevron {
  color: var(--geodav-red);
  fill: var(--geodav-red);
  width: 100px;
  height: 100px;
}
.location-box {
  background-color: var(--geodav-red);
  color: white;
  width: 75%;
}
.location-box > h3 {
  color: white;
}
@media screen and (max-width: 991px) {
  .location-box {
    width: 100%;
  }
}
</style>
