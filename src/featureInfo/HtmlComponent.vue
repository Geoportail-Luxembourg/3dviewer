<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="h-100 w-100 d-block flex-grow-1 overflow-auto pa-2 vcs-html-feature-info"
    :title="title"
    v-html="sanitizedHtml"
  />
</template>
<script>
  import { computed, ref, watch } from 'vue';
  import DOMPurify from 'dompurify';
  import { getInitForUrl, requestUrl } from '@vcmap/core';

  /**
   * @description A component rendering sanitized HTML directly via v-html.
   * The HTML can be provided directly via the `html` prop, or fetched from a
   * URL (e.g. a WMS GetFeatureInfo request returning text/html) via the `src` prop.
   * @vue-prop {string} [html] - HTML content to render directly. Sanitized with DOMPurify before insertion.
   * @vue-prop {string} [src] - URL returning HTML. Its response is fetched, sanitized and rendered.
   * @vue-prop {Object<string,string>} [headers] - optional headers used for the fetch request.
   * @vue-prop {string} [title] - optional title for the container
   */
  export default {
    name: 'HtmlComponent',
    props: {
      html: {
        type: String,
        default: undefined,
      },
      src: {
        type: String,
        default: undefined,
      },
      headers: {
        type: Object,
        default: undefined,
      },
      title: {
        type: String,
        default: undefined,
      },
      /**
       * define attributes prop to prevent passing on as $attrs
       */
      attributes: {
        type: Object,
        default: () => {},
      },
    },
    setup(props) {
      const fetchedHtml = ref('');

      watch(
        () => props.src,
        async (src) => {
          if (!src) {
            fetchedHtml.value = '';
            return;
          }
          try {
            const init = getInitForUrl(src, props.headers);
            const response = await requestUrl(src, init);
            if (!response.ok) {
              fetchedHtml.value = 'No info'; // TODO: use translation + pass the lang
              return;
            }
            fetchedHtml.value = await response.text();
          } catch (e) {
            fetchedHtml.value = 'No info';
          }
        },
        { immediate: true },
      );

      const sanitizedHtml = computed(() =>
        DOMPurify.sanitize(props.html ?? fetchedHtml.value ?? '', {
          ADD_ATTR: ['target'],
        }),
      );

      return {
        sanitizedHtml,
      };
    },
  };
</script>

<style scoped>
.vcs-html-feature-info {
    margin: 8px 10px;
}

.vcs-html-feature-info :deep(h1) {
    font-size: 1.7em;
}
.vcs-html-feature-info :deep(h2) {
    font-size: 1.3em;
    margin: 0.5em 0 0.3em;
}

.vcs-html-feature-info :deep(label) {
    font-weight: bold;
    display: inline-block;
}

.vcs-html-feature-info :deep(label + span) {
    display: inline-block;
    margin-left: 5px;
}

.vcs-html-feature-info :deep(br + *) {
    margin-top: 0.5em;
    display: inline-block;
}
</style>
