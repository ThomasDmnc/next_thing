"use client";
import * as React from "react";
import { modifyMenuItem } from "../../lib/actions";
import { MenuItem } from "@/app/lib/definitions";

export default function EditForm({ menuItem }: { menuItem: MenuItem }) {
  return (
    <main className="flex min-h-screen flex-col w-full items-center py-8 md:py-12 lg:py-12 px-4 md:px-12">
      <form
        action={modifyMenuItem}
        className="flex flex-col w-full max-w-4xl justify-evenly items-start h-full px-4 py-4 mx-auto sm:px-6"
      >
        <label className="font-bold text-blue-600 text-lg py-2">Name</label>
        <input
          required
          name="name"
          type="text"
          className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
          placeholder="Name of the menu item"
          defaultValue={menuItem.name}
        />
        <label className="font-bold text-blue-600 text-lg py-2">
          Description
        </label>
        <textarea
          required
          name="description"
          className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
          placeholder="Description of the menu item"
          defaultValue={menuItem.description}
        />
        <label className="font-bold text-blue-600 text-lg py-2">
          Ingredients
        </label>
        <textarea
          required
          name="ingredients"
          className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
          placeholder="Ingredients of the menu item"
          defaultValue={menuItem.ingredients}
        />
        <label className="font-bold text-blue-600 text-lg py-2">Category</label>
        <select
          required
          name="category"
          className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
          defaultValue={menuItem.category}
        >
          <option value="">Select a category</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Entree">Entree</option>
          <option value="Main">Main</option>
          <option value="Side">Side</option>
          <option value="Cheese">Cheese</option>
          <option value="Dessert">Dessert</option>
          <option value="Beverage">Beverage</option>
        </select>
        <label className="font-bold text-blue-600 text-lg py-2">Price</label>
        <input
          required
          name="price"
          type="number"
          step="0.01"
          min="0"
          className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
          placeholder="Price of the menu item"
          defaultValue={menuItem.price}
        />
        <label className="font-bold text-blue-600 text-lg py-2">Image</label>
        <input
          type="file"
          className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
        />
        <label className="font-bold text-blue-600 text-lg py-2">
          Availability
        </label>
        <select
          required
          name="availability"
          defaultValue={menuItem.availability.toString()}
          className="w-full h-full p-2 border-2 border-blue-300 rounded mb-4"
        >
          <option value="">Select availability</option>
          <option value="true">Available</option>
          <option value="false">Not available</option>
        </select>

        <div className="flex flex-row w-full justify-center items-center my-8">
          <button
            type="submit"
            className="bg-gray-500 rounded-lg p-4 font-bold text-white hover:bg-gray-700"
          >
            Create
          </button>
        </div>
      </form>
    </main>
  );
}
