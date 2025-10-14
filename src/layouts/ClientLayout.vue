<template>
  <div>
    <section class="bg-white p-4">
      <header>
        Clint PANEL
      </header>
    </section>
    <section class="flex">
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