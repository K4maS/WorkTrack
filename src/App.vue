<template>
  <header class="bg-dark text-white p-4">
    <nav class="container d-flex justify-content-between align-items-center">
      <div class="brand">WorkTask</div>
      <div class="nav-links d-flex">
        <template v-if="$route.fullPath != '/'">
          <RouterLink to="/" class="nav-link text-white px-3">На главную</RouterLink>
        </template>
      </div>
    </nav>
  </header>

  <main class="container mt-4 mb-5">
    <RouterView />
  </main>

  <footer class="bg-dark text-white p-4 text-center footer-fixed">
    <div class="container">
      <p>&copy; 2023 WorkTask. Все права защищены.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
 
header .brand {
  font-size: 1.5rem;
  font-weight: bold;
}

header .nav-links .nav-link {
  text-decoration: none;
}

header .nav-links .nav-link:hover {
  text-decoration: underline;
}

footer p {
  margin: 0;
  font-size: 0.9rem;
}

.footer-fixed {
  position: fixed;
  width: 100%;
  bottom: 0;
}

main {
  padding-bottom: 70px;
}
</style>
