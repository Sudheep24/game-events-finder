"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { db, storage } from "../../firebase"; // Adjust this import based on your Firebase setup
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// Import your file uploader component
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form"; // Adjust imports based on your UI library
import { Button } from "@/components/ui/Button"; // Adjust imports based on your UI library
import { ToastContainer, toast } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast notifications
import FileUploader from "./FileUploader";

const EventForm = ({ userId, type, event, eventId }) => {
  const eventDefaultValues = {
    eventname: "",
    category: "",
    description: "",
    address: "",
    imageUrl: "",
    date: "",
    entryFee: "",
  };

  const [files, setFiles] = useState<File[]>([]);
  const initialValues = event && type === "Update" ? { ...event } : eventDefaultValues;

  const form = useForm({
    defaultValues: initialValues,
  });

  async function handleCreateEvent(values) {
    try {
      let uploadedImageUrl = "";

      // Handle image upload
      if (files.length > 0) {
        const file = files[0]; // Assuming single file upload
        const storageRef = ref(storage, `event-images/${file.name}`);

        // Upload file to Firebase Storage
        await uploadBytes(storageRef, file);
        uploadedImageUrl = await getDownloadURL(storageRef);
      }

      const eventData = {
        eventname: values.eventname,
        category: values.category,
        description: values.description,
        imageUrl: uploadedImageUrl,
        address: values.address,
        date: values.date,
        entryFee: values.entryFee || "Free",
        createdAt: new Date(),
        createdBy: userId,
      };

      // Push data to Firebase Firestore
      const docRef = await addDoc(collection(db, "events"), eventData);
      toast.success("Event created successfully!"); // Show success toast
      form.reset(); // Clear the form fields
      setFiles([]); // Reset files after submission
    } catch (error) {
      console.error("Error adding event to Firestore:", error);
      toast.error("Error creating event: " + error.message); // Show error toast
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <ToastContainer /> {/* Include ToastContainer to display toast notifications */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleCreateEvent)} className="flex flex-col gap-6 p-8 rounded-lg bg-gray-900 text-white max-w-xl w-full">
          <h2 className="text-2xl font-bold mb-4 text-white">{type} Event</h2>

          {/* Event Name Field */}
          <FormField
            control={form.control}
            name="eventname"
            render={({ field }) => (
              <FormItem>
                <label className="block text-sm font-medium text-white mb-2">Event Name</label>
                <FormControl>
                  <input type="text" {...field} className="w-full p-2 rounded text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category Field */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <label className="block text-sm font-medium text-white mb-2">Category</label>
                <FormControl>
                  <input type="text" {...field} className="w-full p-2 rounded text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description Field */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <label className="block text-sm font-medium text-white mb-2">Description</label>
                <FormControl>
                  <textarea {...field} className="w-full p-2 rounded text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address Field */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <label className="block text-sm font-medium text-white mb-2">Address</label>
                <FormControl>
                  <input type="text" {...field} className="w-full p-2 rounded text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date Field */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <label className="block text-sm font-medium text-white mb-2">Date</label>
                <FormControl>
                  <input type="date" {...field} className="w-full p-2 rounded text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Entry Fee Field */}
          <FormField
            control={form.control}
            name="entryFee"
            render={({ field }) => (
              <FormItem>
                <label className="block text-sm font-medium text-white mb-2">Entry Fee</label>
                <FormControl>
                  <input type="text" {...field} className="w-full p-2 rounded text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image Uploader */}
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <label className="block text-sm font-medium text-white mb-2">Event Image</label>
                <FormControl>
                  <FileUploader onFieldChange={field.onChange} imageUrl={field.value} setFiles={setFiles} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image Preview Section */}
          {files.length > 0 && (
            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-lg font-medium text-white">Uploaded Images:</h3>
              <div className="flex gap-2">
                {files.map((file, index) => (
                  <img key={index} src={URL.createObjectURL(file)} alt={`Uploaded file ${index}`} className="w-24 h-24 object-cover rounded" />
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={form.formState.isSubmitting}
            className="bg-white text-black hover:bg-gray-300 focus:ring focus:ring-gray-500"
          >
            {form.formState.isSubmitting ? "Submitting..." : `${type} Event`}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EventForm;
