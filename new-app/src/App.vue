<template>
  <div id="app" class="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
    <header class="text-center mb-6">
      <h1 class="text-4xl font-bold text-blue-600">My Digital CV</h1>
      <p class="text-gray-600">Welcome to my interactive CV!</p>
    </header>
    
    <!-- Profile Photo Section -->
    <div class="profile-section mb-6">
      <img
        src="@/assets/profile.jpg"
        alt="Profile Photo"
        class="profile-photo"
      />
    </div>

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

<style scoped>
/* Centering the content */
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh; /* Full height */
}

/* Profile photo styles */
.profile-photo {
  width: 150px; /* Adjust the size as needed */
  height: 150px;
  border-radius: 50%; /* Makes the photo round */
  object-fit: cover; /* Ensures the image fits within the circle */
  margin-top: 10px;
}

body {
  font-family: Arial, sans-serif;
}
</style>
