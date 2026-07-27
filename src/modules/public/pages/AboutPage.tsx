import { PageHeader, AboutStory, AboutTeam, AboutValues, AboutStats } from "../components";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Learn more about our company, our team, and what makes us tick."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutTeam />
    </>
  );
}
