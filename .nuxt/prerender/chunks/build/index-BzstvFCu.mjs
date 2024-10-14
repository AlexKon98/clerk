import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, reactive, ref } from 'file://C:/Users/Admin/Desktop/clerk/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'file://C:/Users/Admin/Desktop/clerk/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-COteDoP9.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/devalue/index.js';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/Admin/Desktop/clerk/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Admin/Desktop/clerk/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TabsList",
  __ssrInlineRender: true,
  props: {
    tabs: {}
  },
  emits: ["changeActive"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "tabs" }, _attrs))} data-v-93654112><!--[-->`);
      ssrRenderList(_ctx.tabs, (tab) => {
        _push(`<li class="${ssrRenderClass({ active: tab.isActive })}" data-v-93654112>${ssrInterpolate(tab.name)}</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TabsList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-93654112"]]);
const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='16'%20height='13'%20viewBox='0%200%2016%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.08471%209.62365L1.93292%206.47186C1.57839%206.11733%201.00389%206.11631%200.648103%206.46959C0.290537%206.82464%200.289516%207.40265%200.645826%207.75896L5.08471%2012.1978L15.3586%201.92397C15.7128%201.56972%2015.7128%200.995371%2015.3586%200.641122C15.0044%200.286991%2014.4303%200.286855%2014.076%200.640819L5.08471%209.62365Z'%20fill='%2300CC33'/%3e%3c/svg%3e";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "VCheckbox",
  __ssrInlineRender: true,
  props: {
    isSmall: { type: Boolean },
    title: {},
    state: { type: Boolean },
    id: {}
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: "checkbox" + _ctx.id,
        class: ["checkbox", { small: _ctx.isSmall, checked: _ctx.state }]
      }, _attrs))} data-v-d7795f83><input type="checkbox" name="checkbox"${ssrRenderAttr("id", "checkbox" + _ctx.id)} data-v-d7795f83><div data-v-d7795f83>${ssrInterpolate(_ctx.title)}</div></label>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VCheckbox.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const VCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d7795f83"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SubscribeItem",
  __ssrInlineRender: true,
  props: {
    subItem: {}
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const change = (id) => {
      emits("change", id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "subscribe" }, _attrs))} data-v-1ff48a8b><div class="subscribe__heading" data-v-1ff48a8b>${ssrInterpolate(_ctx.subItem.heading)}</div><h4 class="subscribe__title" data-v-1ff48a8b>${ssrInterpolate(_ctx.subItem.title)}</h4><p class="subscribe__text" data-v-1ff48a8b>${ssrInterpolate(_ctx.subItem.text)}</p><ul class="subscribe__list" data-v-1ff48a8b><!--[-->`);
      ssrRenderList(_ctx.subItem.list, (item) => {
        _push(`<li data-v-1ff48a8b><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-1ff48a8b><span data-v-1ff48a8b>${ssrInterpolate(item)}</span></li>`);
      });
      _push(`<!--]--></ul><picture class="subscribe__picture" data-v-1ff48a8b><source${ssrRenderAttr("srcset", _ctx.subItem.image.mobile)} media="(max-width: 1055px)" data-v-1ff48a8b><img class="subscribe__image"${ssrRenderAttr("src", _ctx.subItem.image.desktop)}${ssrRenderAttr("alt", _ctx.subItem.title)} data-v-1ff48a8b></picture>`);
      _push(ssrRenderComponent(VCheckbox, {
        state: _ctx.subItem.checkbox.isActive,
        title: _ctx.subItem.checkbox.title,
        id: _ctx.subItem.id,
        onChange: change
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubscribeItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1ff48a8b"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheBreadcrumbs",
  __ssrInlineRender: true,
  props: {
    breadcrumbs: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "breadcrumbs" }, _attrs))} data-v-3472c48b><!--[-->`);
      ssrRenderList(_ctx.breadcrumbs, (breadcrumb) => {
        _push(`<li data-v-3472c48b>`);
        if (breadcrumb.link) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: breadcrumb.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(breadcrumb.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(breadcrumb.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<span data-v-3472c48b>${ssrInterpolate(breadcrumb.name)}</span>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheBreadcrumbs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheBreadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3472c48b"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='9'%20height='14'%20viewBox='0%200%209%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.349976%2012.355L5.69331%207L0.349976%201.645L1.99498%200L8.99498%207L1.99498%2014L0.349976%2012.355Z'%20fill='white'/%3e%3c/svg%3e";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SubscribeForm",
  __ssrInlineRender: true,
  emits: ["checkall"],
  setup(__props, { emit: __emit }) {
    const formData = reactive({
      email: "",
      isChecked: false
    });
    const emits = __emit;
    const changeState = () => {
      formData.isChecked = !formData.isChecked;
      emits("checkall", formData.isChecked);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "subscribe" }, _attrs))} data-v-91e42b81><label for="email" class="subscribe__label" data-v-91e42b81><input type="email" name="email" id="email" placeholder="\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430"${ssrRenderAttr("value", formData.email)} data-v-91e42b81><button class="subscribe__button" data-v-91e42b81><span data-v-91e42b81>\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F</span><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-91e42b81></button></label>`);
      _push(ssrRenderComponent(VCheckbox, {
        id: "sub",
        "is-small": true,
        state: formData.isChecked,
        title: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0432\u0441\u0435 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438",
        onChange: changeState
      }, null, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubscribeForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SubscribeForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-91e42b81"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const breadcrumbs = ref([
      {
        id: 0,
        name: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
        link: "/"
      },
      {
        id: 1,
        name: "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0438",
        link: "/"
      },
      {
        id: 2,
        name: "\u0425\u043B\u0435\u0431\u043D\u044B\u0435 \u043A\u0440\u043E\u0448\u043A\u0438"
      }
    ]);
    const tabs = ref([
      {
        id: 0,
        name: "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0438",
        isActive: true
      },
      {
        id: 1,
        name: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438",
        isActive: false
      },
      {
        id: 2,
        name: "\u041C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u044B",
        isActive: false
      }
    ]);
    const changeActiveTab = (id) => {
      tabs.value.forEach((tab) => {
        tab.isActive = tab.id === id;
      });
    };
    const subscribeList = ref([
      {
        id: 0,
        title: "\u0423\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440",
        heading: "\u041F\u0435\u0440\u0435\u0434 \u0440\u0430\u0441\u0441\u0432\u0435\u0442\u043E\u043C",
        text: "\u0421\u0430\u043C\u044B\u0435 \u0432\u0430\u0436\u043D\u044B\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u0437\u0430 \u0434\u0435\u043D\u044C. \u041A\u0440\u0430\u0442\u043A\u043E, \u043F\u043E \u0434\u0435\u043B\u0443, \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E.",
        image: {
          desktop: "/images/morning.jpg",
          mobile: "/images/morning-mobile.jpg"
        },
        list: [
          "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0434\u043B\u044F \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u043E\u0432, \u0418\u041F \u0438 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430",
          "\u041F\u043E\u0434\u0431\u043E\u0440\u043A\u0430 \u0441\u0442\u0430\u0442\u0435\u0439 \u0437\u0430 \u0434\u0435\u043D\u044C"
        ],
        checkbox: {
          title: "\u0423\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 59 342 \u0447\u0435\u043B\u043E\u0432\u0435\u043A",
          isActive: false
        }
      },
      {
        id: 1,
        title: "\u041D\u043E\u0447\u043D\u043E\u0439 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440",
        heading: "\u041F\u043E\u0441\u043B\u0435 \u0437\u0430\u043A\u0430\u0442\u0430",
        text: "\u0421\u0430\u043C\u0430\u044F \u043A\u0440\u0430\u0442\u043A\u0430\u044F \u0433\u0430\u0437\u0435\u0442\u0430 \u043E \u043D\u0430\u043B\u043E\u0433\u0430\u0445 \u0438 \u0431\u0443\u0445\u0443\u0447\u0435\u0442\u0435 \u0432 \u043C\u0438\u0440\u0435 \u2014 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F.",
        image: {
          desktop: "/images/evening.jpg",
          mobile: "/images/evening-mobile.jpg"
        },
        list: [
          "\u0410\u043D\u0430\u043B\u0438\u0437, \u043E\u0446\u0435\u043D\u043A\u0430 \u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0430\u043C\u043E\u0435 \u0433\u043B\u0430\u0432\u043D\u043E\u0435",
          "\u041B\u0443\u0447\u0448\u0438\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u044B \u044E\u0437\u0435\u0440\u043E\u0432 \u0432 \u043E\u0431\u0437\u043E\u0440\u0435"
        ],
        checkbox: {
          title: "\u0423\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 37 480 \u0447\u0435\u043B\u043E\u0432\u0435\u043A",
          isActive: false
        }
      },
      {
        id: 2,
        title: "\u041D\u043E\u0436\u043D\u0438\u0446\u044B \u0441\u043A\u0438\u0434\u043E\u043A",
        heading: "\u0420\u0430\u0437 \u0432 \u0434\u0432\u0435 \u043D\u0435\u0434\u0435\u043B\u0438",
        text: "\u041F\u043E\u0434\u0431\u043E\u0440\u043A\u0430 \u0441\u0430\u043C\u044B\u0445 \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0445 \u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043E\u0442 \u043D\u0430\u0434\u0435\u0436\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439.",
        image: {
          desktop: "/images/scissors.jpg",
          mobile: "/images/scissors-mobile.jpg"
        },
        list: [
          "\u0410\u043A\u0446\u0438\u0438 \u0438 \u0441\u043A\u0438\u0434\u043A\u0438 \u043E\u0442 \u043B\u0438\u0434\u0435\u0440\u043E\u0432 \u0440\u044B\u043D\u043A\u0430",
          "\u0422\u0435, \u043A\u0442\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043B\u0441\u044F \u2013 \u044D\u043A\u043E\u043D\u043E\u043C\u044F\u0442 \u043C\u043D\u043E\u0433\u043E \u0434\u0435\u043D\u0435\u0433"
        ],
        checkbox: {
          title: "\u0423\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 92 118 \u0447\u0435\u043B\u043E\u0432\u0435\u043A",
          isActive: false
        }
      },
      {
        id: 3,
        title: "\u0427\u0435\u043C\u043E\u0434\u0430\u043D \u0432\u0435\u0431\u0438\u043D\u0430\u0440\u043E\u0432",
        heading: "\u041F\u043E \u043C\u0435\u0440\u0435 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0430\u043D\u043E\u043D\u0441\u043E\u0432",
        text: "\u041F\u043E\u0434\u0431\u043E\u0440\u043A\u0430 \u0441 \u0430\u043D\u043E\u043D\u0441\u0430\u043C\u0438 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0445 \u0432\u0435\u0431\u0438\u043D\u0430\u0440\u043E\u0432 \u043D\u0430 \u0441\u0430\u043C\u044B\u0435 \u0442\u043E\u043F\u043E\u0432\u044B\u0435 \u0442\u0435\u043C\u044B \u043F\u0440\u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0438 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432.",
        image: {
          desktop: "/images/vebinars.jpg",
          mobile: "/images/vebinars-mobile.jpg"
        },
        list: [
          "\u041D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u0440\u0438\u0448\u043B\u0435\u043C \u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0432\u0435\u0431\u0438\u043D\u0430\u0440\u044B",
          "\u041F\u043E\u0434\u0431\u043E\u0440\u043A\u0430 \u0442\u043E\u043F\u043E\u0432\u044B\u0445 \u0442\u0435\u043C \u0434\u043B\u044F \u0432\u0435\u0431\u0438\u043D\u0430\u0440\u043E\u0432"
        ],
        checkbox: {
          title: "\u0423\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 92 082 \u0447\u0435\u043B\u043E\u0432\u0435\u043A",
          isActive: false
        }
      }
    ]);
    const changeItem = (id) => {
      subscribeList.value.forEach((sub) => {
        if (sub.id === id)
          sub.checkbox.isActive = !sub.checkbox.isActive;
      });
    };
    const checkAll = (isChecked) => {
      subscribeList.value.forEach((sub) => sub.checkbox.isActive = isChecked);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabsList = __nuxt_component_0;
      const _component_SubscribeItem = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-35611e0a><section class="main__nav" data-v-35611e0a><div class="container" data-v-35611e0a>`);
      _push(ssrRenderComponent(TheBreadcrumbs, { breadcrumbs: breadcrumbs.value }, null, _parent));
      _push(`<h1 class="main__title" data-v-35611e0a>\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \xAB\u041A\u043B\u0435\u0440\u043A\u0430\xBB</h1>`);
      _push(ssrRenderComponent(_component_TabsList, {
        tabs: tabs.value,
        onChangeActive: changeActiveTab
      }, null, _parent));
      _push(`</div></section><section class="main__subscribe" data-v-35611e0a><div class="container" data-v-35611e0a><h2 class="main__subtitle" data-v-35611e0a>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0442 \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u0430\u043C</h2>`);
      _push(ssrRenderComponent(SubscribeForm, { onCheckall: checkAll }, null, _parent));
      _push(`<ul class="main__list" data-v-35611e0a><!--[-->`);
      ssrRenderList(subscribeList.value, (sub) => {
        _push(`<li data-v-35611e0a>`);
        _push(ssrRenderComponent(_component_SubscribeItem, {
          "sub-item": sub,
          onChange: changeItem
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35611e0a"]]);

export { index as default };
//# sourceMappingURL=index-BzstvFCu.mjs.map
