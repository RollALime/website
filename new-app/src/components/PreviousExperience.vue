<template>
    <div class="bg-white p-4 rounded shadow">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Previous Experience</h2>
      <div v-for="(job, index) in experiences" :key="index" class="mb-6">
        <div>
          <h3 class="text-xl font-bold text-blue-500">
            {{ job.title }}
          </h3>
          <p class="text-gray-700 italic">{{ job.company }} ({{ job.years }})</p>
        </div>
        <div>
          <details>
            <summary class="cursor-pointer text-blue-500 hover:underline">
              Responsibilities
            </summary>
            <ul class="ml-4 mt-2 list-disc">
              <li v-for="(responsibility, resIndex) in job.responsibilities" :key="resIndex">
                <details>
                  <summary class="cursor-pointer text-gray-800 hover:underline">
                    {{ responsibility.name }}
                  </summary>
                  <ul class="ml-4 mt-2 list-disc text-gray-600">
                    <li v-for="(example, exIndex) in responsibility.examples" :key="exIndex">
                      {{ example }}
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PreviousExperience",
    data() {
      return {
        experiences: [
          {
            title: "Frontend Developer",
            company: "Tech Solutions",
            years: "2020-2023",
            responsibilities: [
              {
                name: "Developing user interfaces",
                examples: [
                  "Designed responsive layouts for the company dashboard.",
                  "Improved load times by optimizing assets.",
                ],
              },
              {
                name: "Collaborating with backend developers",
                examples: [
                  "Integrated REST APIs for real-time data updates.",
                  "Worked closely with backend teams to define API contracts.",
                ],
              },
            ],
          },
          {
            title: "Web Designer",
            company: "Creative Studio",
            years: "2017-2020",
            responsibilities: [
              {
                name: "Designing wireframes",
                examples: [
                  "Created user-friendly mockups for client presentations.",
                  "Developed interactive prototypes using Figma.",
                ],
              },
              {
                name: "Maintaining design systems",
                examples: [
                  "Updated brand guidelines with modern design principles.",
                  "Standardized typography and icon usage across projects.",
                ],
              },
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  details summary {
    font-weight: bold;
    margin-top: 8px;
  }
  </style>
  