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
              <v-img :cloudinary="true" v-bind="logo"></v-img>
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
      number: "+49 69 4005520",
      mail: "info@glueckkanja.com",
      copyright: "2025 glueckkanja AG. All rights reserved.",
      brandLogos: null,
      quote:
        "Powered by <strong><a href='https://www.glueckkanja.com/de/entra-intune/managed-intune/'>Managed Intune</a></strong> — glueckkanja delivers modern and fully cloud-based device management.",
      logos: [
        {
          img: "logos/gk-Logo-sw.svg",
          alt: "glueckkanja Logo",
          url: "microsoft-edge:https://www.glueckkanja.com/de",
          class: "max-w-19rem",
        },
      ],
      links: [
        {
          title: "Datenschutz",
          url: "microsoft-edge:https://www.glueckkanja.com/de/datenschutz",
        },
        {
          title: "Impressum",
          url: "microsoft-edge:https://www.glueckkanja.com/de/impressum",
        },
        {
          title: "Kontakt & Standorte",
          url: "microsoft-edge:https://www.glueckkanja.com/de/company/contact-and-locations",
        },
      ],
    },
    en: {
      bgColor: "var(--color-blue-medium)",
      number: "+49 69 4005520",
      mail: "info@glueckkanja.com",
      copyright: "2025 glueckkanja AG. All rights reserved.",
      brandLogos: null,
      quote:
        "Powered by <strong><a href='https://www.glueckkanja.com/en/entra-intune/managed-intune/'>Managed Intune</a></strong> — glueckkanja delivers modern and fully cloud-based device management.",
      logos: [
        {
          img: "logos/gk-Logo-sw.svg",
          alt: "glueckkanja Logo",
          url: "microsoft-edge:https://www.glueckkanja.com/en",
          class: "max-w-19rem",
        },
      ],
      links: [
        {
          title: "Privacy",
          url: "microsoft-edge:https://www.glueckkanja.com/en/privacy",
        },
        {
          title: "Imprint",
          url: "microsoft-edge:https://www.glueckkanja.com/en/imprint",
        },
        {
          title: "Contact & Locations",
          url: "microsoft-edge:https://glueckkanja.com/en/company/contact-and-locations",
        },
      ],
    },
  }).value,
};
</script>
