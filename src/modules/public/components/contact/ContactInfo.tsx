import { Mail, MapPin, Phone, Clock, MessageCircle, Globe } from "lucide-react";
import { cn } from "@/shared/lib/cn";

const contactDetails = [
  {
    id: 1,
    title: "Email",
    value: "support@electromart.com",
    icon: Mail,
    gradient: "from-blue-500 to-cyan-500",
    lightBg: "bg-blue-50 dark:bg-blue-950/30",
    ringColor: "ring-blue-200 dark:ring-blue-800",
  },
  {
    id: 2,
    title: "Phone",
    value: "+92 344 1683991",
    icon: Phone,
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50 dark:bg-emerald-950/30",
    ringColor: "ring-emerald-200 dark:ring-emerald-800",
  },
  {
    id: 3,
    title: "Address",
    value: "123 Business Street, Tech Park, City, Country",
    icon: MapPin,
    gradient: "from-purple-500 to-pink-500",
    lightBg: "bg-purple-50 dark:bg-purple-950/30",
    ringColor: "ring-purple-200 dark:ring-purple-800",
  },
];

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={cn(
                "group flex items-start gap-4 rounded-2xl border border-gray-200/60 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-gray-800/60 dark:bg-gray-950",
                item.lightBg
              )}
            >
              <div
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-sm transition-transform duration-300 group-hover:scale-110",
                  item.gradient
                )}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Business Hours */}
      <div className="rounded-2xl border border-gray-200/60 bg-white p-5 dark:border-gray-800/60 dark:bg-gray-950">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-sm">
            <Clock className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">
            Business Hours
          </h3>
        </div>
        <div className="space-y-2">
          {businessHours.map((item) => (
            <div
              key={item.day}
              className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0 dark:border-gray-800"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.day}
              </span>
              <span
                className={cn(
                  "text-sm",
                  item.hours === "Closed"
                    ? "font-medium text-red-500"
                    : "text-gray-600 dark:text-gray-400"
                )}
              >
                {item.hours}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="rounded-2xl border border-gray-200/60 bg-white p-5 dark:border-gray-800/60 dark:bg-gray-950">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-500 text-white shadow-sm">
            <Globe className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-50">
            Follow Us
          </h3>
        </div>
        <div className="flex gap-3">
          {[
            { icon: MessageCircle, label: "WhatsApp", href: "#" },
            { icon: Globe, label: "Facebook", href: "#" },
            { icon: Globe, label: "Instagram", href: "#" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:hover:border-blue-800 dark:hover:bg-blue-950/30 dark:hover:text-blue-400"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="overflow-hidden rounded-2xl border border-gray-200/60 dark:border-gray-800/60">
        <div className="flex h-48 items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
          <div className="text-center">
            <MapPin className="mx-auto mb-2 h-8 w-8 text-gray-400" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Interactive Map Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
