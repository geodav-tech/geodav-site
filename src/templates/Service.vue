<template>
  <Layout>
    <section class="my-5 px-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="mb-4">{{$page.service.title}}</h1>
            <div class="section-header-line" style="margin-left: 0;"></div>
          </div>
        </div>
        <VueRemarkContent />
      </div>
    </section>
  </Layout>
</template>
<page-query>
query Service ($id: ID!) {
  service(id: $id) {
    title
    tagline
    summary
    coverImage
  }
}
</page-query>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.service.title
    }
  }
}
</script>
<style scoped>

</style>
