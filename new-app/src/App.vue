<template>
  <div id="app" class="p-6 bg-gray-100 min-h-screen">
    <header class="text-center mb-6">
      <h1 class="text-4xl font-bold text-blue-600">My Digital CV</h1>
      <p class="text-gray-600">Welcome to my interactive CV!</p>
    </header>
    <main>
      <PreviousExperience />
    </main>
  </div>
</template>

<script>
import PreviousExperience from "./components/PreviousExperience.vue";

export default {
  name: "App",
  components: {
    PreviousExperience,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
