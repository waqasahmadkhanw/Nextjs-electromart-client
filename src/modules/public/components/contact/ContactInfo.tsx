import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    id: 1,
    title: "Email",
    value: "support@example.com",
    icon: Mail,
  },
  {
    id: 2,
    title: "Phone",
    value: "+923441683991",
    icon: Phone,
  },
  {
    id: 3,
    title: "Address",
    value: "123 Business Street, City, Country",
    icon: MapPin,
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactDetails.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="flex items-start gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Icon className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">
                {item.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}