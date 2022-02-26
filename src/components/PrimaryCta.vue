<template>
  <g-link class="btn primary-cta" :to="route">
    <span class="btn-text">{{text}}</span>
  </g-link>
</template>

<script>
export default {
  name: 'PrimaryCta',
  props: {
    text: {
      type: String,
      default: 'LET’S TALK'
    },
    route: {
      type: String,
      default: '/contact/'
    }
  }
}
</script>

<style scoped>
.primary-cta {
  font-weight: 700;
  font-family: 'Montserrat';
  font-size: 18px;
  color: #fff;
  background-color: var(--geodav-red);
  border-color: var(--geodav-red);
}
.primary-cta:hover {
  color: #fff;
  opacity: 0.8;
}
</style>
