<template>
  <div>
    <section class="bg-white p-4">
      <header>
        ADMIN PANEL
      </header>
    </section>
    <section class="flex">
      <aside class="bg-gray-700 w-1/4 min-h-screen text-white">
        Aside
      </aside>
      <article class="bg-gray-50 w-3/4 p-4">
        <slot></slot>
      </article>
    </section>
  </div>
</template>

<script setup>
defineOptions({
    name
})
</script>

<style lang="scss" scoped>

</style>