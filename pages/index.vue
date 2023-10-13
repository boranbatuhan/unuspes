<script setup>
</script>


<template>
    <div class="container  overflow-x-hidden flex items-center justify-start flex-col mx-auto gap-7 min-h-screen p-2">
        <beadheader class="hue"/>


        <div class="graborder rounded-lg text-black px-2 py-1 transition-all">
            adfasdfasdf
        </div>


        <!-- shopnow button start -->

            <div class="w-96 h-24 graborder flex items-center justify-center flex-row">
                <p class="text-5xl font-gerhaus">
                    Shop now
                </p>

            </div>

        <!-- shopnow button end -->


         <!-- main section start -->
         <div class="container 2xl:gap-4 mx-auto  flex items-start justify-center flex-row p-2">
            <!-- leftmenu start -->
            <div class="h-fit w-52  rounded-lg p-1 gap-7 flex flex-col">
                <div class="h-72 w-full rounded-lg graborder">
                    asdasd
                </div>
                <div class="h-16 w-full rounded-lg graborder"></div>

            </div>
            <!-- leftmenu end-->
            
            <!-- center start -->
            <div class="h-96 w-full max-w-2xl  rounded-lg p-1 gap-7 flex flex-col">
                <div class="h-full w-full graborder rounded-lg">
                </div>

            </div>
            <!-- center end-->

            <!-- right start -->
            <div class="h-fit w-52  rounded-lg p-1 gap-7 flex flex-col">
                <div class="h-56 w-full graborder rounded-lg"></div>
                <div class="h-32 w-full graborder rounded-lg"></div>

            </div>
            <!-- right end-->
        </div>
        <!-- main section end -->


    </div>
</template>


<style>

.graborder{
  background:
  linear-gradient(0.25turn, #ffffff, #fdfdfd, #fdfdfd) padding-box,
  linear-gradient(0.25turn, #535EFC, #0EC8EE, #0EC8EE) border-box;
  border: 2px solid transparent;
}
/* .graborder:hover{
  background:
  linear-gradient(0.25turn, #ee0e51, #ee0e64, #fc5369) padding-box,
  linear-gradient(0.25turn, #535EFC, #0EC8EE, #0EC8EE) border-box;
  color:white
} */


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
