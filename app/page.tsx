import {
  AddonSection,
  AdvertSection,
  FooterColumn,
  FrequentAskedSection,
  Navbar,
  PlanPricing,
} from "@/components";
import { footerContent } from "@/constants";

import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-full angled-background">
        <PlanPricing />
        <AddonSection />
        <AdvertSection />
        <FrequentAskedSection />
      </main>
      <footer className="w-full h-full py-12">
        <div className="grid grid-cols-1 justify-items-start gap-5 md:grid-cols-3 md:justify-items-center">
          {/* Grid Col 1 */}
          <div>
            <FooterColumn
              title={footerContent.product.title}
              links={footerContent.product.links}
            />
            <FooterColumn
              title={footerContent.pricing.title}
              links={footerContent.pricing.links}
            />
          </div>

          {/* Grid Col 2 */}
          <div>
            <FooterColumn
              title={footerContent.freeResource.title}
              links={footerContent.freeResource.links}
            />
            <FooterColumn
              title={footerContent.templates.title}
              links={footerContent.templates.links}
            />
          </div>

          {/* Grid Col 3 */}
          <div>
            <FooterColumn
              title={footerContent.bonsai.title}
              links={footerContent.bonsai.links}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default page;
