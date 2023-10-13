<script setup>
</script>


<template>
    <div class="container  overflow-x-hidden flex items-center justify-start flex-col mx-auto gap-7 min-h-screen p-2">
        <beadheader class="hue"/>
        <!-- shopnow button start -->
        <my-div class=""> 
            <div class="w-96 h-24  flex items-center justify-center flex-row">
                <p class="text-5xl font-gerhaus">
                    Shop now
                </p>

            </div>
        </my-div>
        <!-- shopnow button end -->


         <!-- main section start -->
         <div class="container 2xl:gap-4 mx-auto  flex items-start justify-center flex-row p-2">
            <!-- leftmenu start -->
            <div class="h-fit w-52  rounded-lg p-1 gap-7 flex flex-col">
                <my-div class="h-72 w-full rounded-lg">
                    asdasd
                </my-div>
                <my-div class="h-16 w-full rounded-lg"></my-div>

            </div>
            <!-- leftmenu end-->
            
            <!-- center start -->
            <div class="h-96 w-full max-w-2xl  rounded-lg p-1 gap-7 flex flex-col">
                <my-div class="h-full w-full  rounded-lg">
                </my-div>

            </div>
            <!-- center end-->

            <!-- right start -->
            <div class="h-fit w-52  rounded-lg p-1 gap-7 flex flex-col">
                <my-div class="h-56 w-full rounded-lg"></my-div>
                <my-div class="h-32 w-full rounded-lg"></my-div>

            </div>
            <!-- right end-->
        </div>
        <!-- main section end -->


    </div>
</template>


<style>




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
