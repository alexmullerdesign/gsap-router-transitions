<script setup>
import { onUnmounted, ref, watch } from 'vue';
import gsap from 'gsap';

import { useTransitionComposable } from '../composables/transition-composable';

const { transitionState } = useTransitionComposable();
const main = ref();
const ctx = ref();

watch(
  [() => transitionState.transitionComplete, main],
  (newValue) => {
    if (newValue && main.value) {
      ctx.value = gsap.context((self) => {
        const boxes = self.selector(".box");
        boxes.forEach((box) => {
          gsap.to(box, {
            x: 150,
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              end: "top 20%",
              scrub: true,
            },
          });
        });
      }, main.value); // <- Scope!
    }
  },
  {
    immediate: true,
  }
);

onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <main>
    <section class="section flex-center column blue">
      <h1>Basic ScrollTrigger in VueJS</h1>
      <h2>Scroll down to see the magic happen!!</h2>
    </section>
    <div class="section flex-center column" ref="main">
      <div class="box">box</div>
      <div class="box">box</div>
      <div class="box">box</div>
    </div>
    <section class="section flex-center orange column">
      <h1>The End!</h1>
      <h2>
        For more information visit:&nbsp;
        <a
          href="https://greensock.com/scrolltrigger/"
          target="_blank"
          rel="noreferrer"
        >
          greensock.com/scrolltrigger/
        </a>
      </h2>
    </section>
  </main>
</template>
