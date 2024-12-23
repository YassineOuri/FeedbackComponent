"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HelloWorld_vue_1 = __importDefault(require("./components/HelloWorld.vue"));
const FeedbackFab_vue_1 = __importDefault(require("./FeedbackFab.vue"));
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = Object.assign(Object.assign(Object.assign({}, {}), {}), __VLS_ctx);
    let __VLS_components;
    const __VLS_localDirectives = Object.assign(Object.assign({}, {}), __VLS_ctx);
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['logo'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://vite.dev"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign(Object.assign({ src: ("/vite.svg") }, { class: ("logo") }), { alt: ("Vite logo") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://vuejs.org/"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign(Object.assign({ src: ("./assets/vue.svg") }, { class: ("logo vue") }), { alt: ("Vue logo") }));
    // @ts-ignore
    [HelloWorld_vue_1.default,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(HelloWorld_vue_1.default, new HelloWorld_vue_1.default({ msg: ("Vite + Vue"), }));
    const __VLS_1 = __VLS_0({ msg: ("Vite + Vue"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [FeedbackFab_vue_1.default,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(FeedbackFab_vue_1.default, new FeedbackFab_vue_1.default({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['logo'];
    __VLS_styleScopedClasses['vue'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {
            HelloWorld: HelloWorld_vue_1.default,
            FeedbackFab: FeedbackFab_vue_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
