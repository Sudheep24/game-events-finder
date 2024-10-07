import * as z from "zod";

export const eventFormSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    category: z.string().min(3, 'Category must be at least 3 characters'), // Adding a minimum length for category
    description: z.string()
        .min(3, 'Description must be at least 3 characters')
        .max(400, 'Description must be less than 400 characters'),
    address: z.string()
        .min(3, 'Address must be at least 3 characters')
        .max(400, 'Address must be less than 400 characters'),
    city: z.string()
        .min(3, 'City must be at least 3 characters')
        .max(100, 'City must be less than 100 characters'),
    state: z.string()
        .min(3, 'State must be at least 3 characters')
        .max(100, 'State must be less than 100 characters'),
    zip: z.string()
        .min(3, 'ZIP code must be at least 3 characters')
        .max(20, 'ZIP code must be less than 20 characters'),
    country: z.string()
        .min(3, 'Country must be at least 3 characters')
        .max(100, 'Country must be less than 100 characters'),
    entryFee: z.string().optional(), // Optional field
    totalSlots: z.string().optional(), // Optional field
    availableSlots: z.string().optional(), // Optional field
    imageUrl: z.string().optional(), // Optional field, since it may be set after upload
    date: z.string().optional(), // Optional field for date
    time: z.string().optional(), // Optional field for time
});
