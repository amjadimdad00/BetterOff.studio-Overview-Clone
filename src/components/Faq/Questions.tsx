import React from "react";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  downgrade?: React.ReactNode;
}

export const accordionItems: AccordionItem[] = [
  {
    title: "What distinguishes us from other agencies?",
    content: (
      <p>
        We have worked at the largest agencies in the world and we’ve owned our
        own digital development studios. From those experiences, we identified
        all the wasteful processes that inflate fees, over-complicate
        communications, and delay turnaround times. In creating our
        subscriptions and ready-made projects, we have streamlined creative
        services to include only what’s absolutely essential for achieving the
        best client outcomes. By eliminating the bloat, it allowed us to offer
        growing businesses access to high-end creative that they wouldn’t have
        otherwise been able to afford. We’re innovative. We’re doing it to serve
        you. And we’re exceptional at what we do. That’s what distinguishes us.
      </p>
    ),
  },
  {
    title: "Why not hire an in-house designer or freelancer?",
    content: (
      <p>
        In today’s job market, a senior creative will cost you six figures.
        It’ll take at least a couple months to recruit and onboard them. Then
        you’ll have to manage them, their personality, and their narrow area of
        expertise. With a subscription or ready-made project, you have access to
        multi-disciplined talent, all senior level, and we do the managing. As
        far as freelancers, the A-listers are usually booked, and those that are
        available are juggling a roster of other clients. They’re often
        undependable, and having to jump from one to another causes brand
        inconsistency.
      </p>
    ),
  },
  {
    title: "Are creative requests truly unlimited?",
    content: (
      <p>
        Once you’re a client, you’re free to submit as many requests as you’d
        like within your Project Workflow, and we’ll deliver them
        one-after-another, in order of priority, as defined by you. A Project
        Workflow is a queue of active requests serviced by your dedicated
        creative. Each request that comes is worked on one at a time. If you
        want two project requests serviced simultaneously, you would simply
        subscribe to our more robust plan with double the workflows and
        dedicated creatives.
      </p>
    ),
  },
  {
    title: "How fast will I receive my work?",
    content: (
      <p>
        Depends on the project requested. But, on average, we complete most
        design requests within 2–3 days. More complex requests require lengthier
        timelines. But we’re always upfront and reasonable about our estimated
        delivery dates, as well as any phases that require milestones to reach
        them.
      </p>
    ),
  },
  {
    title: "What’s your refund policy?",
    content: (
      <p>
        We work tirelessly to revise and tweak and refine until you love our
        work. Considering the amount of effort, attention, and quality that we
        pour into our work, we cannot issue refunds.
      </p>
    ),
  },
  {
    title: "What if I have a single project?",
    content: (
      <p>
        Our subscriptions work best for companies that have ongoing branding
        needs. If you’ve got a single project, we offer a full-service menu of
        prepackaged projects to suit most creative needs. If you don’t find the
        project you’re looking for, please book a chat and we’ll tailor a
        service to meet your exact needs.
      </p>
    ),
  },
  {
    title: "What don’t we do?",
    content: (
      <p>
        Our array of services are comprehensive. But there are a few areas that
        don’t fall within our expertise: Media buying, technical copywriting,
        and 3D modeling are a few. If you have something specific in mind, reach
        out and let’s discuss the specs.
      </p>
    ),
  },
  {
    title: "How do I submit a creative request?",
    content: (
      <p>
        Once you’ve signed up, you will receive an email that grants access to
        your client dashboard with a project request form that will walk you
        through the steps to initiate your job. Once submitted, your dedicated
        Project Manager will contact you within 24 hours and immediately assign
        an appropriate creative. You will begin receiving daily project updates
        that will continue until final delivery. Simple, easy, and thorough.
      </p>
    ),
  },
  {
    title: "Do I own my work?",
    content: (
      <p>
        Every piece of creative we develop is tailored specifically for your
        brand and 100% owned by you. We share access to all your native source
        files.
      </p>
    ),
  },
  {
    title: "How is my team assembled?",
    content: (
      <p>
        Your dedicated Project Manager will review your projected workflow
        before assigning the appropriate creative based on the personality of
        the brand and the nature and scope of the work. For more complex
        projects, your dedicated creative will change, depending on the phase of
        the project. For example, on a website development assignment, your
        dedicated creative would shift according to the stage of work:
        strategist, copywriter, art director, designer, developer.
      </p>
    ),
  },
  {
    title: "How soon can I submit a project request?",
    content: (
      <p>
        Immediately upon sign up, you will receive an email that grants access
        to your client dashboard with a project request form that will notify
        your dedicated Project Manager to assign your creative. From sign-up to
        the start of work happens within 24 hours.
      </p>
    ),
  },
  {
    title: "How do I upgrade, downgrade, or cancel?",
    content: (
      <p>
        Scaling is painless. For any changes to your plan, simply email your
        desired status update to{" "}
        <a href="mailto:subscribe@betteroff.studio">
          subscribe@betteroff.studio
        </a>
        . Upgrade costs are prorated during your current billing cycle.
      </p>
    ),
    downgrade: (
      <p>
        For downgrades, your plan will renew at the lower level on your next
        billing date. To cancel, all you have to do is email{" "}
        <a href="mailto:subscribe@betteroff.studio">
          subscribe@betteroff.studio
        </a>{" "}
        and we’ll take care of you!
      </p>
    ),
  },
];
