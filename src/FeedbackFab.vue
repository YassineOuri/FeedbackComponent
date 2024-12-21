<template>
  <div>
    <button
      style="z-index: 1002; position: absolute; top: 10px; left: 10px"
      @click="toggleCanvas"
    >
      Hey
    </button>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from "vue";
const isDrawing: Ref<boolean> = ref(false);
const isCanvas: Ref<boolean> = ref(false);
let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

function toggleCanvas() {
  isCanvas.value = !isCanvas.value;
}

function createCanvas() {
  canvas = document.createElement("canvas");
  context = canvas.getContext("2d")!;
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

function startDrawing(e: MouseEvent) {
  isDrawing.value = true;
  context!.beginPath();
  context!.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function draw(e: MouseEvent) {
  if (isDrawing.value) {
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
    context!.lineTo(x, y);
    context!.stroke();
  }
}

function stopDrawing() {
  isDrawing.value = false;
}

watch(isCanvas, (isCanvas) => {
  if (isCanvas) {
    createCanvas();
  } else destroyCanvas();
});
</script>

<style scoped></style>
