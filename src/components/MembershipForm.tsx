import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import background_first from "/assets/background_first.jpg";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  surname: z.string().min(2, "Surname must be at least 2 characters"),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 18, {
    message: "Age must be a number and 18 or above",
  }),
  email: z.string().email("Invalid email address"),
});

export const MembershipForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      age: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Membership Application Received",
      description: "We will contact you soon regarding your membership.",
    });
    console.log(values);
  }

  return (
    <section className="py-20 bg-gray-50 bg-[url('/assets/background_first')] bg-cover filter rounded-lg  bg-center relative"
    style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${background_first})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}>
      <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-daz-blue mb-12">
        Become a Member
        </h2>
        <h3 className="font-bold text-gray-500 text-center mb-12">
        Join us in our mission to raise awareness and support for dementia
        care.
        </h3>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your name" {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
            <FormLabel>Surname</FormLabel>
            <FormControl>
              <Input placeholder="Enter your surname" {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
            <FormLabel>Age</FormLabel>
            <FormControl>
              <Input placeholder="Enter your age" {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
          )}
          />
          <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Enter your email" {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
          )}
          />
          <Button type="submit" className="w-full bg-daz-green hover:bg-daz-green/90">
          Submit Application
          </Button>
        </form>
        </Form>
      </motion.div>
      </div>
    </section>
  );
};