import MyBlogList from "@/components/my-blog-list";
import MyFooter from "@/components/my-footer";
import MyGoToTopButton from "@/components/my-go-to-top-button";
import { MyHero } from "@/components/my-hero";
import MyHeroTwo from "@/components/my-hero-two";
import MyNavBar from "@/components/my-navbar";
import { MyServiceFeatures } from "@/components/my-service-features";
import { MySkillFeatures } from "@/components/my-skill-features";
import { MySkillFeatureTwo } from "@/components/my-skill-features-two";
import { MyTechnologyFeatures } from "@/components/my-technology-features";
import { MyTimeline } from "@/components/my-timeline";
import React from "react";

const Page = () => {
  return (
    <div>
      <header className="sticky top-0 z-[100]">
        <MyNavBar />
      </header>

      <main className="mb-20">
        <section>
          <MyHero />
          <MyHeroTwo />
        </section>
        <section>
          <MyTimeline />
        </section>
        <section className="max-w-screen-xl mx-auto">
          <MyServiceFeatures />
        </section>
        <section className="max-w-screen-xl mx-auto">
          <MySkillFeatures />
          <MySkillFeatureTwo />
        </section>
        <section className="max-w-screen-xl mx-auto">
          <MyTechnologyFeatures />
        </section>
        <article className="max-w-screen-xl mx-auto">
          <MyBlogList />
        </article>
      </main>

      <MyFooter />
      <MyGoToTopButton />
    </div>
  );
};

export default Page;
