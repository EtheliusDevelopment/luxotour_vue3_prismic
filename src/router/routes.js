const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("pages/Index.vue"),
      },
      {
        path: "about",
        name: "About Us",
        component: () => import("pages/About.vue"),
      },
      {
        path: "luxury-travel",
        name: "Luxury Travel",
        component: () => import("pages/LuxuryTravel"),
      },
      {
        path: "luxury-travel/italy",
        name: "Luxury Travel Italy",
        component: () => import("pages/LuxuryTravel/Italy/italy.vue"),

        children: [
          {
            path: ":slug",
            name: "Luxury Travel Italy",
            component: () => import("pages/LuxuryTravel/Italy/italy.vue"),
          },
        ],
      },

      {
        path: "wine-club",
        name: "Wine Club",
        component: () => import("pages/WineClub.vue"),
      },
      {
        path: "post/:id",
        name: "Post",
        component: () => import("pages/WineClub.vue"),
      },
      {
        path: "testimonials",
        name: "Testimonials",
        component: () => import("pages/Testimonials.vue"),
      },
      {
        path: "testimonials/:slug",
        name: "Testimonials Luxo Italia",
        component: () => import("pages/TestimonialSingle.vue"),
      },
      {
        path: "quiz",
        name: "Quiz",
        component: () => import("pages/Quiz.vue"),
      },
      {
        path: "blog",
        name: "Blog",
        component: () => import("pages/Blog.vue"),
      },
      {
        path: "blog/:post",
        name: "Blog Luxo Italia",
        component: () => import("pages/BlogSingle.vue"),
      },
      {
        path: "contact-us",
        name: "Contact Us",
        component: () => import("pages/Contacts.vue"),
      },
      {
        path: "start_planning",
        name: "start_planning",
        component: () => import("pages/StartPlanning.vue"),
      },
      {
        path: "payment/:name",
        name: "Payment",
        component: () => import("pages/Payment.vue"),
      },
      {
        path: "brochure",
        name: "Brochure",
        component: () => import("pages/Brochure.vue"),
      },
      {
        path: "privacy",
        name: "Privacy",
        component: () => import("pages/Privacy.vue"),
      },
      {
        path: "terms-and-conditions",
        name: "Terms and Conditions",
        component: () => import("pages/Terms.vue"),
      },
      {
        path: "error_404",
        name: "Luxo Italia Error 404",
        component: () => import("pages/Error404"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
