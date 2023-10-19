<template>
    <button class="uiverse overflow-hidden ">
      <div class="wrapper w-96 h-24 text-6xl font-gerhaus font-thin leading-[6rem] ">
        <span class="relative !animate-none ">{{props.name}}</span>
        <div class="circle circle-12"></div>
        <div class="circle circle-11"></div>
        <div class="circle circle-10"></div>
        <div class="circle circle-9"></div>
        <div class="circle circle-8"></div>
        <div class="circle circle-7"></div>
        <div class="circle circle-6"></div>
        <div class="circle circle-5"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-1"></div>
    
      </div>
    </button>
    
    </template>
    
    <script setup>
    
    const props = defineProps({
        name:String,
        wrapperclass:String
    })
    </script>
    
    <style >
    .uiverse {
      --duration: 16s;
      --easing: cubic-bezier(.6,-0.01,.6,1.01);
      --c-color-1: rgb(56, 199, 255);
     /* Changed color */
      --c-color-2: #ffffff69;
     /* Changed color */
      --c-color-3: #ffffff;
     /* Changed color */
      --c-color-4: rgba(255, 0, 191, 0.267);
     /* Changed color */
      --c-shadow: rgba(87, 224, 255, 0.842);
     /* Changed color */
      --c-shadow-inset-top: rgba(52, 223, 255, .9);
     /* Changed color */
      --c-shadow-inset-bottom: rgba(215, 250, 255, .8);
     /* Changed color */
      --c-radial-inner: #15d2ff;
     /* Changed color */
      --c-radial-outer: #72faff;
     /* Changed color */
      --c-color: #fff;
      -webkit-tap-highlight-color: transparent;
      -webkit-appearance: none;
      outline: none;
      position: relative;
      cursor: pointer;
      border: none;
      display: table;
      border-radius: 24px;
      padding: 0;
      margin: 0;
      text-align: center;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.02em;
      line-height: 1.5;
      color: var(--c-color);
      background: radial-gradient(circle, var(--c-radial-inner), var(--c-radial-outer) 80%);
      box-shadow: 0 0 14px var(--c-shadow);
    }
    
    .uiverse:before {
      content: '';
      pointer-events: none;
      position: absolute;
      z-index: 3;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border-radius: 24px;
      box-shadow: inset 0 3px 12px var(--c-shadow-inset-top), inset 0 -3px 4px var(--c-shadow-inset-bottom);
    }
    
    .uiverse .wrapper {
      -webkit-mask-image: -webkit-radial-gradient(white, black);
      overflow: hidden;
      border-radius: 24px;
      min-width: 132px;
    
    }
    
    .uiverse .wrapper span {
      display: inline-block;
      position: relative;
      z-index: 1;
    }
    
    .uiverse .wrapper .circle {
      position: absolute;
      left: 0px;
      top:3rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      filter: blur(var(--blur, 8px));
      background: var(--background, transparent);
      transform: translate(var(--x, 0), var(--y, 0)) translateZ(0);
      animation: var(--animation, none) var(--duration) var(--easing) infinite alternate;
    }
    
    .uiverse .wrapper .circle.circle-1, .uiverse .wrapper .circle.circle-9, .uiverse .wrapper .circle.circle-10 {
      --background: var(--c-color-4);
    }
    
    .uiverse .wrapper .circle.circle-3, .uiverse .wrapper .circle.circle-4 {
      --background: var(--c-color-2);
      --blur: 14px;
    }
    
    .uiverse .wrapper .circle.circle-5, .uiverse .wrapper .circle.circle-6 {
      --background: var(--c-color-3);
      --blur: 16px;
    }
    
    .uiverse .wrapper .circle.circle-2, .uiverse .wrapper .circle.circle-7, .uiverse .wrapper .circle.circle-8, .uiverse .wrapper .circle.circle-11, .uiverse .wrapper .circle.circle-12 {
      --background: var(--c-color-1);
      --blur: 12px;
    }
    
    .uiverse .wrapper .circle.circle-1 {
      --x: 0;
      --y: -40px;
      --animation: circle-1;
      left: 0px;
      top:3rem;
    }
    
    .uiverse .wrapper .circle.circle-2 {
      --x: 92px;
      --y: 8px;
      --animation: circle-2;
      left: 0px;
      top:2rem;
    }
    
    .uiverse .wrapper .circle.circle-3 {
      --x: -12px;
      --y: -12px;
      --animation: circle-3;
      left: 0px;
      top:1rem;
    }
    
    .uiverse .wrapper .circle.circle-4 {
      --x: 80px;
      --y: -12px;
      --animation: circle-4;
      left: 0px;
      top:0rem;
    }
    
    .uiverse .wrapper .circle.circle-5 {
      --x: 12px;
      --y: -4px;
      --animation: circle-5;
      left: 1px;
      top:3rem;
    }
    
    .uiverse .wrapper .circle.circle-6 {
      --x: 56px;
      --y: 16px;
      --animation: circle-6;
      left: 2px;
      top:3rem;
    }
    
    .uiverse .wrapper .circle.circle-7 {
      --x: 8px;
      --y: 28px;
      --animation: circle-7;
      left: 3px;
      top:3rem;
    }
    
    .uiverse .wrapper .circle.circle-8 {
      --x: 28px;
      --y: -4px;
      --animation: circle-8;
      left: 5px;
      top:3rem;
    }
    
    .uiverse .wrapper .circle.circle-9 {
      --x: 20px;
      --y: -12px;
      --animation: circle-9;
      left: 10px;
      top:2rem;
    }
    
    .uiverse .wrapper .circle.circle-10 {
      --x: 64px;
      --y: 16px;
      --animation: circle-10;
    }
    
    .uiverse .wrapper .circle.circle-11 {
      --x: 4px;
      --y: 4px;
      --animation: circle-11;
    }
    
    .uiverse .wrapper .circle.circle-12 {
      --blur: 14px;
      --x: 52px;
      --y: 4px;
      --animation: circle-12;
    }
    
    @keyframes circle-1 {
      33% {
        transform: translate(-0rem, -1rem) translateZ(0);
      }
    
      66% {
        transform: translate(-12rem, -4rem) translateZ(0);
      }
    }
    
    @keyframes circle-2 {
      33% {
        transform: translate(-10rem, -0rem) translateZ(0);
      }
    
      66% {
        transform: translate(-2rem, -1rem) translateZ(0);
      }
    }
    
    @keyframes circle-3 {
      33% {
        transform: translate(-2rem, -2rem) translateZ(0);
      }
    
      66% {
        transform: translate(-7rem, -1rem) translateZ(0);
      }
    }
    
    @keyframes circle-4 {
      33% {
        transform: translate(-16rem, 2rem) translateZ(0);
      }
    
      66% {
        transform: translate(-26rem, -4rem) translateZ(0);
      }
    }
    
    @keyframes circle-5 {
      33% {
        transform: translate(-12rem, 1rem) translateZ(0);
      }
    
      66% {
        transform: translate(26rem, -2rem) translateZ(0);
      }
    }
    
    @keyframes circle-6 {
      33% {
        transform: translate(18rem, -1rem) translateZ(0);
      }
    
      66% {
        transform: translate(-16rem, -1rem) translateZ(0);
      }
    }
    
    @keyframes circle-7 {
      33% {
        transform: translate(8rem, 1rem) translateZ(0);
      }
    
      66% {
        transform: translate(-28rem, -2rem) translateZ(0);
      }
    }
    
    @keyframes circle-8 {
      33% {
        transform: translate(22rem, -4rem) translateZ(0);
      }
    
      66% {
        transform: translate(26rem, -2rem) translateZ(0);
      }
    }
    
    @keyframes circle-9 {
      33% {
        transform: translate(20rem, -2rem) translateZ(0);
      }
    
      66% {
        transform: translate(-26rem, -1rem) translateZ(0);
      }
    }
    
    @keyframes circle-10 {
      33% {
        transform: translate(29rem, 2rem) translateZ(0);
      }
    
      66% {
        transform: translate(-12rem, 2rem) translateZ(0);
      }
    }
    
    @keyframes circle-11 {
      33% {
        transform: translate(1rem, 1rem) translateZ(0);
      }
    
      66% {
        transform: translate(0rem, -28rem) translateZ(0);
      }
    }
    
    @keyframes circle-12 {
      33% {
        transform: translate(42rem, 1rem) translateZ(0);
      }
    
      66% {
        transform: translate(64rem, 2rem) translateZ(0);
      }
    }
    </style>