// import {
//   PageHeader,
//   FAQList,
// } from "../components";

import FAQList from "../components/faq/FAQList";
import PageHeader from "../components/PageHeader";

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
      />

      <FAQList />
    </>
  );
}