import { PageHeader, AboutStory, AboutTeam, AboutValues, AboutStats } from "../components";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Learn more about our company, our team, and what makes us tick."
      />

      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutTeam />
    </>
  );
}
