<template>
  <div
    class="footer text-white vue-component"
    :style="{ backgroundColor: footerData.bgColor }"
  >
    <div class="container pt-8">
      <div class="footer__content-row">
        <div class="footer__quote font-size-1" v-html="footerData.quote"></div>
        <hr class="footer__divider my-5" style="opacity: 0.5" />
        <div
          class="footer__content d-flex flex-row flex-wrap justify-content-between"
        >
          <div
            :class="['mb-3', footerData.logos?.classes]"
            v-for="logo in footerData.logos"
          >
            <a
              :href="logo.url"
              :target="logo.target"
              aria-label="Front"
              :class="[
                'footer__logos-link d-block pr-6',
                logo.linkClasses ? logo.linkClasses : 'w-75 w-md-35 w-lg-100',
              ]"
            >
              <v-img v-bind="logo"></v-img>
            </a>
          </div>
          <div class="footer__links-container">
            <ul class="nav nav-sm nav-white nav-x-0">
              <li
                class="nav-item mr-6 footer__links"
                v-for="link in footerData.links"
              >
                <a class="nav-link" :href="link.url" v-bind="link">{{
                  link.title
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="py-2">
          <p class="py-2 text-white small">
            Copyright © {{ footerData.copyright }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const localeData = useLocaleData();

const footerData = {
  ...localeData({
    de: {
      bgColor: "var(--color-blue-medium)",
      copyright: "2026 cloudlab — personal Microsoft 365 lab by Dennis Hermanns.",
      quote:
        "Powered by <strong>Microsoft Intune</strong> — <a href='microsoft-edge:https://cloudlab.d-h.io'>cloudlab</a> ist das persönliche Microsoft 365 Lab von Dennis Hermanns.",
      logos: [
        {
          img: "cloudlab-logo.svg",
          alt: "cloudlab Logo",
          url: "microsoft-edge:https://cloudlab.d-h.io",
          class: "max-w-19rem",
        },
      ],
      links: [
        {
          title: "d-h.io",
          url: "microsoft-edge:https://d-h.io",
        },
        {
          title: "GitHub",
          url: "microsoft-edge:https://github.com/dhe365/edge-redirection-landingpage",
        },
      ],
    },
    en: {
      bgColor: "var(--color-blue-medium)",
      copyright: "2026 cloudlab — personal Microsoft 365 lab by Dennis Hermanns.",
      quote:
        "Powered by <strong>Microsoft Intune</strong> — <a href='microsoft-edge:https://cloudlab.d-h.io'>cloudlab</a> is the personal Microsoft 365 lab of Dennis Hermanns.",
      logos: [
        {
          img: "cloudlab-logo.svg",
          alt: "cloudlab Logo",
          url: "microsoft-edge:https://cloudlab.d-h.io",
          class: "max-w-19rem",
        },
      ],
      links: [
        {
          title: "d-h.io",
          url: "microsoft-edge:https://d-h.io",
        },
        {
          title: "GitHub",
          url: "microsoft-edge:https://github.com/dhe365/edge-redirection-landingpage",
        },
      ],
    },
  }).value,
};
</script>
