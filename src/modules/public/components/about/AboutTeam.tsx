import { cn } from "@/shared/lib/cn";
import { Globe, MessageCircle, Code2 } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in the electronics industry.",
    avatar: "",
    gradient: "from-blue-500 to-cyan-500",
    initials: "SJ",
    skills: ["Leadership", "Strategy", "Innovation"],
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    bio: "Tech enthusiast driving innovation in e-commerce platforms.",
    avatar: "",
    gradient: "from-purple-500 to-pink-500",
    initials: "MC",
    skills: ["Engineering", "AI/ML", "Cloud"],
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Head of Operations",
    bio: "Ensuring seamless logistics and customer satisfaction.",
    avatar: "",
    gradient: "from-emerald-500 to-teal-500",
    initials: "ER",
    skills: ["Logistics", "CRM", "Process"],
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "David Kim",
    role: "Marketing Director",
    bio: "Creative strategist connecting brands with customers.",
    avatar: "",
    gradient: "from-amber-500 to-orange-500",
    initials: "DK",
    skills: ["Branding", "SEO", "Analytics"],
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

const socialIcons = [
  { key: "twitter", icon: Globe, label: "Twitter" },
  { key: "linkedin", icon: MessageCircle, label: "LinkedIn" },
  { key: "github", icon: Code2, label: "GitHub" },
];

export default function AboutTeam() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
            Our Team
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl">
            Meet the <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">People Behind</span> Electromart
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Our dedicated team works tirelessly to bring you the best
            electronics shopping experience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800/60 dark:bg-gray-950"
            >
              {/* Avatar with gradient background */}
              <div className="relative mx-auto mb-5 h-24 w-24">
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl bg-linear-to-br opacity-20 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30",
                    member.gradient
                  )}
                />
                <div
                  className={cn(
                    "relative flex h-full w-full items-center justify-center rounded-2xl bg-linear-to-br text-2xl font-bold text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                    member.gradient
                  )}
                >
                  {member.initials}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                {member.name}
              </h3>

              {/* Role badge */}
              <span className="mb-3 inline-block rounded-full bg-linear-to-r from-blue-50 to-indigo-50 px-3 py-1 text-xs font-medium text-blue-700 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-300">
                {member.role}
              </span>

              <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {member.bio}
              </p>

              {/* Skills tags */}
              <div className="mb-5 flex flex-wrap items-center justify-center gap-1.5">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                {socialIcons.map(({ key, icon: Icon, label }) => {
                  const href = member.socials[key as keyof typeof member.socials];

                  return (
                    <a
                      key={key}
                      href={href}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      aria-label={`${member.name} on ${label}`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

