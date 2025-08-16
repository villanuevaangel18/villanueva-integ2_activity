<script setup></script>

<template>
  <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
    <h1 class="text-2xl font-bold mb-4">Upcoming Events</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow p-5 flex flex-col">
        <div class="flex items-center space-x-3 mb-3">
          <span
            class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold"
          >
            20
          </span>
          <div>
            <h3 class="font-semibold text-gray-800">Tech Innovation Summit</h3>
            <p class="text-xs text-gray-500">Aug 20, 2025</p>
          </div>
        </div>
        <p class="text-sm text-gray-600 flex-1">
          Join industry leaders and innovators for a day of talks, networking, and technology
          showcases.
        </p>
        <div class="mt-4 flex justify-between items-center">
          <a href="#" class="text-indigo-600 hover:underline text-sm">View Details</a>
          <button class="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700">
            Register
          </button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-5 flex flex-col">
        <div class="flex items-center space-x-3 mb-3">
          <span
            class="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold"
          >
            25
          </span>
          <div>
            <h3 class="font-semibold text-gray-800">Campus Clean-Up Drive</h3>
            <p class="text-xs text-gray-500">Aug 25, 2025</p>
          </div>
        </div>
        <p class="text-sm text-gray-600 flex-1">
          A sustainability initiative for students and staff to clean and green our campus together.
        </p>
        <div class="mt-4 flex justify-between items-center">
          <a href="#" class="text-indigo-600 hover:underline text-sm">View Details</a>
          <button class="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700">
            Join Event
          </button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-5 flex flex-col">
        <div class="flex items-center space-x-3 mb-3">
          <span
            class="w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-semibold"
          >
            28
          </span>
          <div>
            <h3 class="font-semibold text-gray-800">Art & Culture Fair</h3>
            <p class="text-xs text-gray-500">Aug 28, 2025</p>
          </div>
        </div>
        <p class="text-sm text-gray-600 flex-1">
          Experience an array of student performances, artworks, and food stalls celebrating
          diversity.
        </p>
        <div class="mt-4 flex justify-between items-center">
          <a href="#" class="text-indigo-600 hover:underline text-sm">View Details</a>
          <button class="bg-pink-600 text-white px-3 py-1 rounded-md text-sm hover:bg-pink-700">
            Attend
          </button>
        </div>
      </div>
    </div>

    <div class="mt-8 bg-white rounded-lg shadow p-6 text-center">
      <h2 class="text-lg font-semibold mb-2">Want to host your own event?</h2>
      <p class="text-sm text-gray-600 mb-4">
        If you have an idea for an event, submit your proposal and get started.
      </p>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Create Event
      </button>
    </div>
  </main>
</template>
