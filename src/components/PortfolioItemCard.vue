<template>
  <div class="col-md-6">
    <div class="card portfolio-item-card mx-md-3 mb-5">
      <g-link :to="`/portfolio/${portfolioItem.id}/`">
        <div class="text-center">
          <g-image loading="lazy" :src="portfolioItem.coverImage" :alt="portfolioItem.title" />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{portfolioItem.title}}</h5>
          <p class="card-text">
            {{portfolioItem.tagline}}
          </p>
        </div>
      </g-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PortfolioItemCard',
  props: {
    portfolioItem: Object
  }
}
</script>
<style scoped>
.portfolio-item-card.card > a {
  text-decoration: none;
  color: var(--geodav-grey);
}
.portfolio-item-card {
  border: none;
}
.portfolio-item-card img {
  width: auto;
  max-width: 100%;
  max-height: 250px;
}
</style>