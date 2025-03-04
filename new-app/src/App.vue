<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <!-- Top Banner -->
    <header
      class="bg-gray-800 text-center text-white flex items-center justify-center w-full"
      style="height: 16.66vh;"
    >
      <h1 class="text-4xl font-bold">My Digital CV</h1>
    </header>

    <!-- Horizontal line below header -->
    <hr class="border-gray-400 w-full my-4" />

    <!-- Main Content Container: Two columns -->
    <div class="flex flex-col md:flex-row p-6 w-full max-w-screen-lg mx-auto">
      <!-- Left Column (1/3 width) -->
      <div class="w-full md:w-1/3 p-4 border-r border-gray-400">
        <!-- Profile Photo -->
        <div class="mb-6 flex justify-center">
          <img
            src="@/assets/profile.jpg"
            alt="Profile Photo"
            class="profile-photo"
          />
        </div>

        <!-- Contact Section -->
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">Contact:</h2>
          <ul class="text-left">
            <li><strong>Address:</strong> 123 Main Street, City, Country</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Email:</strong> example@example.com</li>
          </ul>
        </div>

        <!-- Skills Section -->
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">Skills:</h2>
          <ul class="text-left">
            <li>Skill 1: JavaScript</li>
            <li>Skill 2: Vue.js</li>
            <li>Skill 3: CSS</li>
          </ul>
        </div>

        <!-- Qualifications Section -->
        <div>
          <h2 class="text-2xl font-semibold mb-2">Qualifications:</h2>
          <ul class="text-left">
            <li>Qualification 1: Bachelor’s Degree</li>
            <li>Qualification 2: Certification XYZ</li>
            <li>Qualification 3: 5+ Years Experience</li>
          </ul>
        </div>
      </div>

      <!-- Right Column (2/3 width) -->
      <div class="w-full md:w-2/3 p-4">
        <!-- Professional Summary -->
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">Professional Summary:</h2>
          <p class="ml-4">
            &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <!-- Work History -->
        <div>
          <h2 class="text-2xl font-semibold mb-2">Work History:</h2>
          <PreviousExperience />
        </div>
      </div>
    </div>
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
/* Profile photo styles */
.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

/* Header text centering */
header h1 {
  text-align: center;
  width: 100%;
}
</style>
