<template>
  <span class="w-100" style="display: inline-flex;">
    <svg-icon :icon="icon" class="span-callout-icon" style="min-width: 8%; height: auto;"/>
    <h3 class="mb-0">
      <slot/>
    </h3>
  </span>
</template>
<script>
import SvgIcon from '~/components/SvgIcon'

export default {
  components: { SvgIcon },
  props: {
    icon: {
      default: '@mdiChevronRight'
    }
  }
}
</script>
<style scoped>
.span-callout-icon {
  color: var(--geodav-red);
  fill: var(--geodav-red);
  width: 100px;
  height: 100px;
}
</style>
