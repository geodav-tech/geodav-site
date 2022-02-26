<template>
  <g-link class="btn secondary-cta" :to="route">
    <span class="btn-text">{{text}}</span>
  </g-link>
</template>

<script>
export default {
  name: 'SecondaryCta',
  props: {
    text: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.secondary-cta {
  font-size: 18px;
  color: white;
  font-weight: 600;
  border-color: transparent;
  background: rgba(255,255,255, 0.3);
}
.secondary-cta:hover {
  color: white;
  opacity: 0.8;
}
</style>
