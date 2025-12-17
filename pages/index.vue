<template>
  <content>
    <div class="wrapper d-flex flex-column justify-content-between vh-100">
      <div class="container my-auto">
        <a href="microsoft-edge:https://about:newtab">
          <div class="row row-cols-md-2 row-cols-1">
            <div class="p-5 d-flex align-content-center justify-content-center">
              <v-img v-bind="imgData" class="edgeLogo" />
            </div>
            <div class="p-5">
              <headline class="font-weight-light" :level="textData.level1"
                >{{ textData.overline }}
              </headline>
              <headline class="font-weight-bold pb-3" :level="textData.level2"
                ><span class="underline">{{
                  textData.headline
                }}</span></headline
              >
              <p class="font-size-2 font-weight-light">
                {{ textData.paragraph }}
              </p>
              <cta v-bind="ctaData" class="my-4" />
            </div>
          </div>
        </a>
      </div>
      <svg-shape v-bind="svgShapeData" />
    </div>
  </content>
</template>

<script setup>
const localeData = useLocaleData();

const textData = {
  ...localeData({
    de: {
      overline: "Bitte verwende unseren unternehmensweiten Standardbrowser:",
      paragraph:
        "Die Verwendung unseres managed Microsoft Edge gewährleistet erweiterte Sicherheitsfunktionen zum Schutz deiner Browsing-Erfahrung sowie nahtlose Sicherung und Synchronisierung deiner Daten wie Favoriten auf verschiedenen Geräten. Vielen Dank.",
    },
    en: {
      overline: "Please use our corporate standard browser:",
      paragraph:
        "Using our managed Microsoft Edge ensures enhanced security features to protect your browsing experience, along with seamless backup and synchronization of your data like favorites across devices. Thanks.",
    },
  }).value,
  level1: "h4",
  headline: "Microsoft Edge",
  level2: "h3",
};

const ctaData = computed(() => {
  return {
    ...localeData({
      de: {
        text: "Microsoft Edge nutzen",
      },
      en: {
        text: "Start using Microsoft Edge",
      },
    }).value,
    href: "microsoft-edge:https://about:newtab",
    skin: "secondary",
  };
});

const imgData = computed(() => {
  return {
    img: "icons/icon-edge.svg",
    alt: "Microsoft Edge Logo",
    cloudinary: true,
  };
});

const svgShapeData = computed(() => {
  return {
    align: "bottom",
    peak: "left",
    color: "var(--color-blue-light)",
    height: 150,
  };
});
</script>

<style src="/public/site.css"></style>
