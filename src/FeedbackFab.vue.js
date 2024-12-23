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
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const isDrawing = (0, vue_1.ref)(false);
const isCanvas = (0, vue_1.ref)(false);
let canvas;
let context;
function toggleCanvas() {
    isCanvas.value = !isCanvas.value;
}
function createCanvas() {
    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    // Set the canvas size to cover the entire screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Add styles to ensure it covers the screen
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "1000"; // Canvas stays behind the button
    document.body.appendChild(canvas);
    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmousemove = draw;
    console.log("Canvas Created");
}
function destroyCanvas() {
    const parent = canvas.parentNode;
    document.body.removeChild(canvas);
    console.log("Canvas Destroyed");
}
function startDrawing(e) {
    isDrawing.value = true;
    context.beginPath();
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}
function draw(e) {
    if (isDrawing.value) {
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        context.lineTo(x, y);
        context.stroke();
    }
}
function stopDrawing() {
    isDrawing.value = false;
}
(0, vue_1.watch)(isCanvas, (isCanvas) => {
    if (isCanvas) {
        createCanvas();
    }
    else
        destroyCanvas();
});
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (__VLS_ctx.toggleCanvas) }, { style: ({}) }));
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
            toggleCanvas: toggleCanvas,
        };
    },
});
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
