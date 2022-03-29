<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1"
    class=""
  >
    <path :d="iconMarkup"></path>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: String
  },
  computed: {
    iconMarkup() {
      // if it's an mdi icon, you can pass @mdi<icon_name> and we'll fetch the file from icon-filter.js, eg @mdiChevronRight
      // otherwise you must pass complete SVG path markup that you've already fetched from a file somewhere.
      return this.$props.icon.includes('@mdi') ? require('./icon-filter')[this.$props.icon.replace('@', '')] : this.$props.icon
    }
  }
}
</script>