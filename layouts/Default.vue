<script setup>
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>


<template>
  <my-header/>

    <div class="container font-now  overflow-x-hidden flex items-center justify-start flex-col mx-auto gap-7 min-h-screen p-2">
        <beadheader class="hues"/>

        <!-- shopnow button start -->
            <my-button :name="'Shop Now'" class="saturate-100 hover:saturate-150 hover:scale-105 scale-100 active:scale-100 transition-all"/>
        <!-- shopnow button end -->


         <!-- main section start -->
         <div class="container 2xl:gap-4 mx-auto  flex items-start justify-center flex-row p-2">
            <!-- leftmenu start -->
            <div class="h-fit w-56  rounded-lg p-1 gap-7 flex flex-col">

                <!-- MENU start -->
                <div class="h-fit w-full rounded-lg graborder transition-all  py-4" style="--turn:0.55">
                    <ul>
                    <!-- navmenu start -->
                        <li>
                            <p class="text-2xl font-bold px-6">Menu</p>
                            <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>
                            <ul class="px-10">
                                <li class="hover:underline cursor-pointer underline-offset-2">
                                    <nuxt-link to="/">Anasayfa</nuxt-link>
                                </li>
                                <li class="hover:underline cursor-pointer underline-offset-2">
                                    <nuxt-link to="/products">Tüm Ürünler</nuxt-link>
                                </li>
                                <li class="hover:underline cursor-pointer underline-offset-2">Seriler</li>
                                <li class="hover:underline cursor-pointer underline-offset-2">Kargo</li>
                                <li class="hover:underline cursor-pointer underline-offset-2">Ödeme</li>
                                <li class="hover:underline cursor-pointer underline-offset-2">Bilgi</li>
                                <li class="hover:underline cursor-pointer underline-offset-2">Destek</li>
                            </ul>
                        </li>
                    <!-- navmenu end -->

                    <!-- announcement start -->

                        <li class="my-7">
                            <p class="text-2xl font-bold px-6 ">Duyurular</p>
                            <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>
                            <ul class="pl-10 pr-4">
                                <li class="hover:underline cursor-pointer underline-offset-2">Hafta içi siparişler ertesi gün kargoda.</li>
                            </ul>
                        </li>
                    <!-- announcement end -->
                    

                    <!-- campaign start -->
                    <li>
                        <p class="text-2xl font-bold pl-6 ">Kampanya</p>
                        <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>
                        <ul class="px-10">
                            <li class="hover:underline cursor-pointer underline-offset-2">2. %999 indirim</li>
                            <li class="hover:underline cursor-pointer underline-offset-2">Kargo Bedava!</li>
                        </ul>
                    </li>
                    <!-- campaign start -->

                </ul>
            </div>
            <!-- MENU end -->


                <!-- social media start -->
                <div class="h-fit w-full rounded-lg graborder transition-all py-4" style="--turn:0.45">
                    <p class="text-2xl font-bold pl-6 ">Sosyal Medya</p>
                    <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>
                    <ul class="pl-10">
                        <li class="hover:underline cursor-pointer underline-offset-2">Instagram</li>
                        <li class="hover:underline cursor-pointer underline-offset-2">Tiktok</li>
                        <li class="hover:underline cursor-pointer underline-offset-2">X <span class="text-xs opacity-40 ">(Twitter)</span> </li>
                        <li class="hover:underline cursor-pointer underline-offset-2">Facebook</li>
                    </ul>
                </div>
                <!-- social media end -->

            </div>
            <!-- leftmenu end-->
            
            <!-- center NUXTVPAGE ROUTERVIEW start -->
            <div class=" w-full max-w-2xl min-h-screen rounded-lg p-1 gap-7 flex flex-col">
                <div class="h-full w-full graborder transition-all rounded-lg py-4 px-2" style="--turn:0.35">
                  <slot/>
                </div>
            </div>
            <!-- center NUXTVPAGE ROUTERVIEW end-->


            <!-- right start -->
            <div class="h-fit w-56  rounded-lg p-1 gap-7 flex flex-col">

                <!-- login area start -->
                <div class="h-fit w-full graborder transition-all rounded-lg py-4" style="--turn:0.25">
                    <p class="text-2xl font-bold pl-6 ">Üye Girişi</p>
                    <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>
                    <ul class="p-2">
                        <li class="cursor-pointer h-16 my-2">
                            <label for="email" class="">
                                <p>E mail</p>
                                <input type="email" id="email" class="w-full transition-all outline-none graborder rounded-lg p-1 focus:!border-2 !border" autocomplete="off" spellcheck="off">
                            </label>
                        </li>
                        <li class="cursor-pointer h-16  my-2">
                            <label for="password" class="">
                                <p>Şifre</p>
                                <input type="password" id="password" class="w-full transition-all outline-none graborder rounded-lg p-1 focus:!border-2 !border" autocomplete="off" spellcheck="off">
                            </label>
                        </li>
                        <li class="cursor-pointer p-2">
                            <button class="text-center w-full bg-gradient-to-t from-sky-400 via-sky-600 hover:to-cyan-400 hover:from-cyan-400 hover:via-cyan-600 to-sky-400 py-2 rounded-lg transition-all border-2 border-purple-500/50 font-bold scale-100 hover:scale-105 active:scale-100 text-white">Giriş Yap</button>
                        </li>
                        <li class="cursor-pointer text-xs group text-sky-600">
                            <button class="group-hover:underline ">Şifremi unuttum</button>
                        </li>
                    </ul>
                </div>
                <!-- login area end -->



                <!-- cart  start -->
                <div class="h-fit w-full rounded-lg graborder transition-all py-4" style="--turn:0.85">
                    <p class="text-2xl font-bold pl-6 ">Sepetim</p>
                    <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>
                    <ul class="px-2">
                        <li class="cursor-pointer p-2 flex items-center justify-between  w-full">
                            <p class="basis-3/4 truncate">ABCDEFEA</p> 
                            <p class="basis-1/4">$299</p>
                            <svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"/></svg>
                        </li>
                        <li class="cursor-pointer p-2 flex items-center justify-between  w-full">
                            <p class="basis-3/4 truncate">ABCDqweqweqweqweEFEA</p> 
                            <p class="basis-1/4">$299</p>
                            <svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"/></svg>
                        </li>
                        <li class="cursor-pointer p-2 flex items-center justify-between  w-full">
                            <p class="basis-3/4 truncate">ABCDqweqweqweqweEFEA</p> 
                            <p class="basis-1/4">$29</p>
                            <svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"/></svg>
                        </li>
                    </ul>
                    <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>
                    <p class="ml-32 text-start w-fit ">$1233</p>
                </div>
                <!-- cart  end -->


                <!-- design tool start -->
                <div class="h-fit w-full rounded-lg graborder transition-all py-4" style="--turn:0.45">
                    <p class="text-2xl font-bold pl-6 ">Tasarım Aracı</p>
                    <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>
                    <ul class="px-2">
                        <li class="cursor-pointer p-2">
                            <button class="text-center w-full bg-gradient-to-t from-sky-400 via-sky-600 hover:to-cyan-400 hover:from-cyan-400 hover:via-cyan-600 to-sky-400 py-2 rounded-lg transition-all border-2 border-purple-500/50 font-bold scale-100 hover:scale-105 active:scale-100 text-white">
                                Tasarımı Başlat
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- design tool end -->

                <!-- whatsapp start -->
                <div class="h-fit w-full rounded-lg graborder transition-all py-4" style="--turn:1.15">
                    <p class="text-2xl font-bold pl-6 ">Whatsapp</p>
                    <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>
                    <ul class="px-2 text-center">
                        <li class="hover:underline cursor-pointer underline-offset-2">+90 555 555 55 55</li>
                        <li class="text-xs opacity-50 select-none text-end px-5 mt-1">*özel tasarım ve sorularınız için hızlı mesaj hattı.</li>
                    </ul>
                </div>
                <!-- whatsapp end -->


            </div>
            <!-- right end-->
        </div>
        <!-- main section end -->


        <my-footer class="graborder w-full h-32 rounded-lg p-4" style="--turn:0.5"/>
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
