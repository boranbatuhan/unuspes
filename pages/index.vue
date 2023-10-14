<script setup>
</script>


<template>
    <div class="container  overflow-x-hidden flex items-center justify-start flex-col mx-auto gap-7 min-h-screen p-2">
        <beadheader class="hues"/>



        <!-- shopnow button start -->

            <my-button :name="'Shop Now'" class="saturate-100 hover:saturate-150 hover:scale-105 scale-100 active:scale-100 transition-all"/>

        <!-- shopnow button end -->


         <!-- main section start -->
         <div class="container 2xl:gap-4 mx-auto  flex items-start justify-center flex-row p-2">
            <!-- leftmenu start -->
            <div class="h-fit w-52  rounded-lg p-1 gap-7 flex flex-col">
                <div class="h-72 w-full rounded-lg graborder transition-all" style="--turn:0.55">
                    asdasd
                </div>
                <div class="h-16 w-full rounded-lg graborder transition-all" style="--turn:0.45"></div>

            </div>
            <!-- leftmenu end-->
            
            <!-- center start -->
            <div class="h-96 w-full max-w-2xl  rounded-lg p-1 gap-7 flex flex-col">
                <div class="h-full w-full graborder transition-all rounded-lg" style="--turn:0.35">
                </div>

            </div>
            <!-- center end-->

            <!-- right start -->
            <div class="h-fit w-52  rounded-lg p-1 gap-7 flex flex-col">
                <div class="h-56 w-full graborder transition-all rounded-lg" style="--turn:0.25"></div>
                <div class="h-32 w-full graborder transition-all rounded-lg" style="--turn:0.25"></div>

            </div>
            <!-- right end-->
        </div>
        <!-- main section end -->


    </div>
</template>


<style>

.graborder{
  background:
  linear-gradient(calc(var(--turn) * 1turn), #ffffff, #fdfdfd, #fdfdfd) padding-box,
  linear-gradient(calc(var(--turn) * 1turn), #535EFC, #0EC8EE, #0EC8EE) border-box;
  border: 2px solid transparent;
}

.hue{
    animation: huec 60s infinite linear alternate;
    animation-delay: 5s;
}

@keyframes huec {
    0%{
        filter: hue-rotate(0);
    }
    100%{
        filter: hue-rotate(1turn);
    }
}
</style>
