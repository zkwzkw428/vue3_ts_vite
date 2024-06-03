<template>
  <div class="app">
    <h2>测试异步组件</h2>
    <Suspense>
      <template v-slot:default>
        <div>
          <suspense-component></suspense-component>
        </div>
      </template>
      <template v-slot:fallback>
        <div>组件加载当中。。。。。。</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent, Suspense } from "vue";
import suspenseComponent from "./suspenseComponent.vue";
export default {
  components: { suspenseComponent },
  name: "App",
  setup() {
    const suspenseCompoent = defineAsyncComponent(() =>
      import("./suspenseComponent.vue")
    );
    return { suspenseCompoent };
  },
};
</script>

<style></style>
