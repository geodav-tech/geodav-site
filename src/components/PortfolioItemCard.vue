<template>
  <div :class="colClasses || 'col-md-6'">
    <div class="card portfolio-item-card mx-md-3 mb-5">
      <g-link :to="portfolioItem.path">
        <div class="text-center img-container d-flex">
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
    portfolioItem: Object,
    colClasses: String // bootstrap col sizes; get plugged in as classnames
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
  background-color: transparent;
}
.portfolio-item-card .img-container {
  height: 250px;
  align-items: end;
  justify-content: center;
}
.portfolio-item-card img {
  width: auto;
  max-width: 100%;
  max-height: 250px;
}
</style>