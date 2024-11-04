import { Navbar, PlanPricing } from "@/components";

import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-full angled-background">
        <PlanPricing />
      </main>
    </>
  );
};

export default page;
