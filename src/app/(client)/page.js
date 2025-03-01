import { MyBlogCard } from "@/components/my-blog-card";
import MyFooter from "@/components/my-footer";
import { MyHero } from "@/components/my-hero";
import MyHeroTwo from "@/components/my-hero-two";
import MyNavBar from "@/components/my-navbar";
import { MyServiceFeatures } from "@/components/my-service-features";
import { MySkillFeatures } from "@/components/my-skill-features";
import { MyTimeline } from "@/components/my-timeline";
import React from "react";

const Page = () => {
  return (
    <div>
      <header>
        <nav>
          <MyNavBar />
        </nav>
      </header>

      <main>
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
        </section>
        <article className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <MyBlogCard />
            <MyBlogCard />
            <MyBlogCard />
          </div>
        </article>
      </main>

      <MyFooter />
    </div>
  );
};

export default Page;
