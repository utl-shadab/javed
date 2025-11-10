"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Mail,
  Phone,
  MapPin,
  User,
} from "lucide-react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import toast from "react-hot-toast";
import Select from "react-select";
import { SERVICES } from "@/data/services";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const serviceOptions = [
  ...SERVICES.map((item) => ({
    value: item.title,
    label: item.title,
  })),
  { value: "Other", label: "Other" }, 
];

  const onSubmit = (data: any) => {
    if (!data.phone) {
      toast.error("Phone number is required");
      return;
    }
    toast.success("Appointment request submitted ✅");
    reset();
  };

  return (
    <main className="bg-tila-surface text-[#222B38]">

      {/* ✅ HERO SECTION */}
      <div
        className="w-full h-[300px] md:h-[400px] flex flex-col justify-center bg-no-repeat bg-center bg-cover relative"
        style={{
          backgroundImage: "url('/images/solid.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <Breadcrumb />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mt-4"
          >
            Book a Consultation
          </motion.h1>
          <p className="text-lg opacity-90 mt-2 max-w-[650px]">
            Schedule your legal consultation with our expert team. Fast response guaranteed.
          </p>
        </div>
      </div>

      {/* ✅ BODY CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">

          {/* ✅ LEFT CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#0A1A63]">
              Contact & Office Details
            </h2>

            <p className="text-[#60656F] leading-relaxed">
              Reach out via phone, email or visit our office. Our legal experts will guide you.
            </p>

            <div className="space-y-6 bg-white p-6 rounded-xl border shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-tila-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-[#0A1A63]">Delhi Office</h4>
                  <p className="text-[#60656F]">
                    B-24, Defence Colony, New Delhi, 110024
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-tila-primary" />
                <p className="text-[#60656F]">+91-9876543210</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-tila-primary" />
                <p className="text-[#60656F]">
                  contact@theindianlegalassociates.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* ✅ BEAUTIFUL FORM */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.05)] space-y-8"
          >
            <h3 className="text-2xl font-bold text-[#0A1A63] mb-2">
              Book an Appointment
            </h3>

            {/* ✅ NAME ROW */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <User size={18} className="absolute top-4 left-3 text-gray-500" />
                <input
                  {...register("firstName", { required: true })}
                  placeholder=" "
                  className="w-full border rounded-lg px-10 py-3 focus:border-tila-primary outline-none text-sm peer"
                />
                <label className="absolute text-gray-500 text-sm left-10 top-3 peer-focus:text-xs peer-focus:-top-2 peer-focus:text-tila-primary transition-all bg-white px-1">
                  First Name *
                </label>
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>

              <div className="relative">
                <User size={18} className="absolute top-4 left-3 text-gray-500" />
                <input
                  {...register("lastName", { required: true })}
                  placeholder=" "
                  className="w-full border rounded-lg px-10 py-3 focus:border-tila-primary outline-none text-sm peer"
                />
                <label className="absolute text-gray-500 text-sm left-10 top-3 peer-focus:text-xs peer-focus:-top-2 peer-focus:text-tila-primary transition-all bg-white px-1">
                  Last Name *
                </label>
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>
            </div>

            {/* ✅ EMAIL + PHONE */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <Mail size={18} className="absolute top-4 left-3 text-gray-500" />
                <input
                  type="email"
                  placeholder=" "
                  {...register("email", { required: true })}
                  className="w-full border rounded-lg px-10 py-3 focus:border-tila-primary outline-none text-sm peer"
                />
                <label className="absolute text-gray-500 text-sm left-10 top-3 peer-focus:text-xs peer-focus:-top-2 peer-focus:text-tila-primary transition-all bg-white px-1">
                  Email *
                </label>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">Valid email required</p>
                )}
              </div>

              <div className="bg-white border rounded-lg px-2 py-1">
                <PhoneInput
                  country={"in"}
                  enableSearch
                  onChange={(v) => setValue("phone", v)}
                  inputStyle={{
                    width: "100%",
                    height: "42px",
                    border: "none",
                    background: "transparent",
                  }}
                  buttonStyle={{ border: "none" }}
                />
              </div>
            </div>

            {/* ✅ CITY + SERVICE */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  {...register("city", { required: true })}
                  placeholder="Your City"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:border-tila-primary text-sm"
                />
                {errors.city && (
                  <span className="text-red-500 text-xs">City required</span>
                )}
              </div>

              <Select
                options={serviceOptions}
                onChange={(opt) => setValue("service", opt?.value)}
                placeholder="Select Service"
                className="text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    borderRadius: 8,
                    padding: 2,
                    borderColor: "#d1d5db",
                    ":hover": { borderColor: "#0A1A63" },
                    boxShadow: "none",
                  }),
                }}
              />
            </div>

            {/* ✅ MESSAGE */}
            <textarea
              {...register("message", { required: true })}
              className="w-full border rounded-lg px-4 py-3 h-32 text-sm outline-none focus:border-tila-primary"
              placeholder="Describe your concern..."
            ></textarea>

            {errors.message && (
              <span className="text-red-500 text-xs">Message required</span>
            )}

            {/* ✅ TERMS */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                {...register("confirm", { required: true })}
                className="mt-1 w-5 h-5 accent-current"
              />
              <p className="text-sm text-[#222B38] leading-snug">
                I understand this request is for booking an appointment and{" "}
                <strong>consultation charges may apply.</strong>
              </p>
            </div>

            {errors.confirm && (
              <span className="text-red-500 text-xs">
                Accept terms to continue
              </span>
            )}

            {/* ✅ SUBMIT */}
            <button
              type="submit"
              className="w-full py-3 bg-tila-primary text-white rounded-full font-semibold hover:bg-[#094bbf] transition"
            >
              Book Appointment
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
