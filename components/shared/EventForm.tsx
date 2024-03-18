"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { eventFormSchema } from "../../lib/validator";
import * as z from 'zod';
import React, { useState } from 'react';
import Dropdown from "./Dropdown";
import { Textarea } from "@/components/ui/textarea";
import { FileUploader } from "./FIleUploader";
import { DatePickerDemo } from "./DatePicker";
import { useUploadThing } from "../../lib/uploadthing";
import { useRouter } from "next/navigation";
import { createEvent } from "../../lib/actions/event.action";

import "react-datepicker/dist/react-datepicker.css";

type EventFormProps = {
    userId: string;
    type: "Create" | "Update";
}

export default function EventForm({ userId, type }: EventFormProps) {
    const [files, setFiles] = useState<File[]>([]);
    const { startUpload } = useUploadThing('imageUploader');
    const router = useRouter();
    
    const initialFormData = {
        eventname: '',
        category: '',
        description: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        entryFee: '',
        totalSlots: '',
        availableSlots: '',
        imageUrl: '',
        date: '',
        time: '',
    };

    const form = useForm<z.infer<typeof eventFormSchema>>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: initialFormData
    });

    // Define a submit handler.
    async function onSubmit(values: z.infer<typeof eventFormSchema>) {
        let uploadedImageUrl = values.imageUrl;

        if (files.length > 0) {
            const uploadedImages = await startUpload(files);

            if (!uploadedImages) {
                return;
            }

            uploadedImageUrl = uploadedImages[0].url;
        }

        if (type === "Create") {
            try {
                const newEvent = await createEvent({
                    event: {
                        eventname: values.name,
                        desc: values.description,
                        address: values.address,
                        city: values.city,
                        state: values.state,
                        zip: values.zip,
                        country: values.country,
                        entryfee: values.entryFee,
                        totalslots: values.totalSlots,
                        available: values.availableSlots,
                        imageUrl: uploadedImageUrl,
                        categoryId: values.category
                    },
                    userId,
                    path: '/profile'
                });

                if (newEvent) {
                    form.reset();
                    router.push(`/events/${newEvent._id}`);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <div className="p-16">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col gap-5">
                        <div className="flex flex-col md:flex-row gap-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <Input placeholder="Event Title" {...field} className="form-input" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <Dropdown onChangeHandler={field.onChange} value={field.value} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl className="h-72">
                                            <input type="date"  id="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col gap-5 md:flex-row">
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl className="h-60">
                                            <Textarea placeholder="Address" {...field} className="text-area rounded-2xl" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl className="h-72">
                                            <Textarea placeholder="Description" {...field} className="text-area rounded-2xl" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col gap-5 md:flex-row">
                            <FormField
                                control={form.control}
                                name="imageUrl"
                                render={({ field }) => (
                                    <FormItem className="w-full border border-slate-800 rounded-2xl p-1 flex justify-center items-center">
                                        <FormControl>
                                            <FileUploader
                                                onFieldChange={field.onChange}
                                                imageUrl={field.value}
                                                setFiles={setFiles}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="availableSlots"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <input type="number" className="rounded-full p-2 bg-black border border-slate-500" placeholder="Available slots" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="entryFee"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <input type="number"  className="rounded-full p-2 bg-black border border-slate-500" placeholder="Entry Fee" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col gap-5 md:flex-row">
                            <FormField
                                control={form.control}
                                name="time"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <input type="number" className="rounded-full p-2 bg-black border border-slate-500" placeholder="Event Time" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </>
    );
}
