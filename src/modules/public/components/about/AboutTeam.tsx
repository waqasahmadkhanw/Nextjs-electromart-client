import {
  Card,
  CardContent,
} from "@/shared/components/ui/Card";
import { Avatar } from "@/shared/components/ui/Avatar";
import { Badge } from "@/shared/components/ui/Badge";
import { Globe, MessageCircle, Code2 } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in the electronics industry.",
    avatar: "",
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
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

const socialIcons = [
  { key: "twitter", icon: Globe },
  { key: "linkedin", icon: MessageCircle },
  { key: "github", icon: Code2 },
];

export default function AboutTeam() {
  return (
    <section className="bg-gray-50 py-12 dark:bg-gray-900/50 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Meet Our Team
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Our dedicated team works tirelessly to bring you the best
            electronics shopping experience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.id}>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Avatar
                  src={member.avatar || undefined}
                  name={member.name}
                  size="xl"
                  className="mb-4"
                />

                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  {member.name}
                </h3>
                <Badge variant="info" className="mb-2">
                  {member.role}
                </Badge>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  {member.bio}
                </p>

                <div className="flex gap-3">
                  {socialIcons.map(({ key, icon: Icon }) => {
                    const href =
                      member.socials[key as keyof typeof member.socials];

                    return (
                      <a
                        key={key}
                        href={href}
                        className="text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
                        aria-label={`${member.name} on ${key}`}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

