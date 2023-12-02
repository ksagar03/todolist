import React from 'react'

const AddNewTodo = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font ">
  <div class="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">
    <div class="bg-gray-800 bg-opacity-50 rounded-lg p-10 flex flex-col w-1/2 mt-10 md:mt-0">
      <h2 class="text-white text-lg font-large title-font mb-5">Add New Todo</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-base text-gray-400">Date</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-base text-gray-400">Discription</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 w-fit m-auto focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Todo</button>
    </div>
  </div>
</section>
  )
}

export default AddNewTodo