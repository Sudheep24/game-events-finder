import * as z from "zod";

export const eventFormSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    category: z.string(),
    description: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
    address: z.string().min(3, 'Address must be at least 3 characters').max(400, 'Address must be less than 400 characters'),
    city: z.string().min(3, 'City must be at least 3 characters').max(100, 'City must be less than 100 characters'),
    state: z.string().min(3, 'State must be at least 3 characters').max(100, 'State must be less than 100 characters'),
    zip: z.string().min(3, 'ZIP code must be at least 3 characters').max(20, 'ZIP code must be less than 20 characters'),
    country: z.string().min(3, 'Country must be at least 3 characters').max(100, 'Country must be less than 100 characters'),
    entryFee: z.string(),
    totalSlots: z.string(),
    availableSlots: z.string(),
    imageUrl: z.string(), // Add imageUrl field to the schema
    date: z.string(), // Add date field to the schema
    time:z.string(),
});
