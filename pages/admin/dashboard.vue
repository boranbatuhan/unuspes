<template>
<div class="min-h-screen flex items-center justify-start flex-col bg-stone-50 font-now overflow-x-hidden">
    <!-- delete modal start-->
        <div v-if="openDeleteModal" class="w-screen h-screen fixed top-0 left-0 z-[9999] bg-sky-200 flex items-center justify-center">
            <div class="graborder-anim flex items-center gap-4 w-96 flex-col p-4 rounded-lg">
                <p>Bu ürünü tamamen sileceksiniz. Geri dönüşü yoktur. Onaylıyor musunuz?</p>
                <my-card :p="delSelectedItem" class="!pointer-events-none"/>
                <div class="flex gap-7 items-center justify-center">
                    <div @click="deletePermanent" class="px-3 py-1 rounde-lg cursor-pointer text-white rounded-lg border border-green-700 bg-green-500 hover:scale-105 hover:bg-green-600">Onayla</div>
                    <div @click="closeDelModal" class="px-3 py-1 rounde-lg cursor-pointer text-white rounded-lg border border-sky-700 bg-sky-500 hover:scale-105 hover:bg-sky-600">Vazgeç</div>
                </div>
            </div>
        </div>
    <!-- delete modal end -->
    <div class="container flex flex-row items-end justify-center flex-wrap-reverse mx-auto p-3 ">

        <!-- leftCol start -->
        <div class="w-96  flex items-center justify-start flex-col p-7 gap-7 shrink-0">

            <!-- add product start -->
            <div class="graborder-anim drop-shadow-lg p-3 rounded-lg flex items-start justify-center flex-row gap-3 flex-wrap w-full shrink-0">
                <label for="title" class="w-full">
                    Title:
                    <input required v-model="addform.title" type="text" id="title" :class="{'bg-blue-500 border-blue-950 text-blue-100' : addform.title.length >=1 , 'bg-blue-200 border-blue-500 text-blue-950':addform.title.length <=0 }" class="w-full focus:bg-blue-500 focus:border-blue-950 focus:text-blue-100  border-2 px-3 py-px rounded-full uppercase font-bold cursor-pointer ">
                </label>
                <label for="series" class="w-full">
                    Series:
                    <input required type="text" id="series" v-model="addform.series" :class="{'bg-blue-500 border-blue-950 text-blue-100':!series.includes(addform.series)}" class="w-full focus:bg-blue-500 focus:border-blue-950 focus:text-blue-100 bg-blue-200 border-blue-500 text-blue-950 border-2 px-3 py-px rounded-full uppercase font-bold cursor-pointer ">
                </label>
                    <div class="w-full max-h-24 flex items-start justify-start gap-3 flex-wrap overflow-y-auto drop-shadow-lg p-2">
                        <div v-for="s in series" :key="s" @click="addform.series=s" :class="{'!bg-blue-500 !border-blue-950 !text-blue-100':addform.series==s,'bg-blue-200 border-blue-500 text-blue-950':addform.series !=s}" class="  border-2 px-3 py-px rounded-full uppercase font-bold cursor-pointer hover:scale-105">{{s}}</div>
                    </div>
                <label for="subSeries" class="w-full">
                    SubSeries:
                    <input required type="text" id="subSeries" spellcheck="off" autocomplete="off" v-model="addform.subSeries" :class="{'bg-blue-500 border-blue-950 text-blue-100':!subSeries.includes(addform.subSeries)}" class="w-full focus:bg-blue-500 focus:border-blue-950 focus:text-blue-100 bg-blue-200 border-blue-500 text-blue-950 border-2 px-3 py-px rounded-full uppercase font-bold cursor-pointer ">
                </label>
                <div class="w-full max-h-24 flex items-start justify-start gap-3 flex-wrap overflow-y-auto drop-shadow-lg p-2">
                    <div v-for="s in subSeries" :key="s" @click="addform.subSeries=s.subSeries" :class="{'!bg-blue-500 !border-blue-950 !text-blue-100':addform.subSeries==s.subSeries,'bg-blue-200 border-blue-500 text-blue-950':addform.subSeries !=s.SubSeries,'pointer-events-none saturate-0':s.series !=addform.series,'pointer-events-auto saturate-100':s.series ==addform.series}" class="  border-2 px-3 py-px rounded-full uppercase font-bold cursor-pointer hover:scale-105">{{s.subSeries}}</div>
                </div>
                <label for="price" class="w-full">
                    price:
                    <input required type="number" @keydown.e.prevent id="price" v-model="addform.price" :class="{'bg-blue-500 border-blue-950 text-blue-100':!series.includes(addform.price)}" class="w-full focus:bg-blue-500 focus:border-blue-950 focus:text-blue-100 bg-blue-200 border-blue-500 text-blue-950 border-2 px-3 py-px rounded-full uppercase font-bold cursor-pointer ">
                </label>
                    <div class="w-full max-h-24 flex items-start justify-start gap-3 flex-wrap overflow-y-auto drop-shadow-lg p-2">
                        <div v-for="p in prices" :key="p" @click="addform.price=p" :class="{'!bg-blue-500 !border-blue-950 !text-blue-100':addform.price==p,'bg-blue-200 border-blue-500 text-blue-950':addform.price !=p}" class="  border-2 px-3 py-px rounded-full uppercase font-bold cursor-pointer hover:scale-105">{{p}}</div>
                    </div>
                    <!-- photos start -->
                    <div  class="text-start w-full min-h-[6rem]">
                        photos:
                        <div class="photos flex items-center justify-start gap-2">
                            <div class="w-16 h-16 rounded-lg border-2 border-purple-950 overflow-hidden relative" v-for="i in tempPhotos" :key="i">
                                <div class="w-4 h-4 bg-stone-100/80 rounded-full hover:scale-105 absolute top-0 right-0 cursor-pointer flex items-center justify-center" @click="deletePhoto(i)">
                                    <svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"/></svg>
                                </div>
                                <img  :src="i" id="output"  class="w-full h-full object-cover" />
                            </div>
                            <label  for="file" class="cursor-pointer" v-if="tempPhotos.length<=3">
                            <div class="w-fit h-fit rounded-lg overflow-hidden flex items-center justify-center" >
                                <svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><rect width="36" height="36" x="6" y="6" rx="3"/><path stroke-linecap="round" d="M24 16v16m-8-8h16"/></g></svg>
                            </div>
                            <input id="file" type="file" @change="uploadPhotos($event)"  accept="image/jpg, image/png, image/jpeg" class="hidden" />
                        </label>
                    </div>
                </div>
                    <!-- photos end -->
                    <input :disabled="checkForm" @click="addProduct" type="submit" value="Kaydet" id="submit" class="text-center cursor-pointer w-full disabled:pointer-events-none disabled:saturate-0 bg-gradient-to-t from-sky-400 via-sky-600 to-sky-400 hover:to-blue-400 hover:from-blue-400 hover:via-blue-600  py-2 rounded-lg transition-all border-2 border-purple-500/50  font-bold scale-100 hover:scale-105 active:scale-100 text-white px-4">

            </div>
            <!-- add product end -->


        </div>
        <!-- leftCol end -->


        <!-- rigthCol start -->
        <div class="w-screen md:w-auto flex items-start justify-start flex-col p-7 gap-7 ">

            <!-- product counters start -->
            <div class="graborder-anim w-full p-3 drop-shadow-lg  rounded-lg justify-between  flex">
                <div>
                    <p>Satışa açık ürün : {{productsLive.length}} adet</p>
                    <p>Satışta olmayan ürün : {{productsNotLive.length}} adet</p>
                    <p>Toplam kayıtlı ürün : {{products.length}} adet</p>
                </div>
                <div class="text-end">
                    <p>Seri sayısı : {{series.length}} adet</p>
                    <p>Alt seri sayısı : {{subSeries.length}} adet</p>
                </div>
            </div>
            <!-- product counters end -->



        <!-- products table start -->
        <div  class="max-h-80 drop-shadow-lg graborder rounded-lg overflow-y-scroll w-full overflow-x-auto" style="--turn:0.5">
            <table class="w-full ">
                <thead class="sticky top-0">
                    <tr class="bg-sky-500 text-end">
                        <th class="p-2">Delete</th>
                        <th class="p-2">Title</th>
                        <th class="p-2">images</th>
                        <th class="p-2">Series</th>
                        <th class="p-2">SubSeries</th>
                        <th class="p-2">Price</th>
                        <th class="p-2">Operation</th>
                    </tr>
                </thead>
                <tbody v-auto-animate class="h-fit">
                    <tr v-for="item in products" :key="item.id" class="bg-sky-200 text-end odd:bg-sky-300 hover:bg-sky-950 hover:text-sky-50" :class="{'saturate-0 opacity-70':!item.isLive}">
                        <td class="p-1"><svg @click="openDelModal(item)" class="hover:text-purple-700 cursor-pointer text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="currentColor" d="M5 3h2a1 1 0 0 0-2 0ZM4 3a2 2 0 1 1 4 0h2.5a.5.5 0 0 1 0 1h-.441l-.443 5.17A2 2 0 0 1 7.623 11H4.377a2 2 0 0 1-1.993-1.83L1.941 4H1.5a.5.5 0 0 1 0-1H4Zm3.5 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0V6ZM5 5.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM3.38 9.085a1 1 0 0 0 .997.915h3.246a1 1 0 0 0 .996-.915L9.055 4h-6.11l.436 5.085Z"/></svg></td>
                        <td class="p-1 max-w-[8rem] truncate">{{item.title}} {{item.id}}</td>
                        <td class="p-1"><div class="w-8 h-8"> <NuxtImg :src="item.images[0]" alt="prodcutimg" class="object-cover w-full h-full" draggable="false"  placeholder="../_nuxt/assets/images/unuspes.png"/></div></td>
                        <td class="p-1 max-w-[8rem] truncate">{{item.series}}</td>
                        <td class="p-1 max-w-[8rem] truncate">{{item.subSeries}}</td>
                        <td class="p-1">{{item.price}}</td>
                        <td class="p-1 flex items-center  justify-center gap-2">
                            <svg @click="setIsLive(item,true)" :class="{'opacity-100':item.isLive==true,'opacity-30 hover:opacity-60':item.isLive==false}" class="text-green-500 cursor-pointer hover:saturate-200 hover:scale-105 rounded-lg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"/><path d="M9 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M14 15V9l4 6V9"/></g></svg>
                            <svg @click="setIsLive(item,false)" :class="{'opacity-30 hover:opacity-60 !saturate-100':item.isLive==true,'opacity-100':item.isLive==false}" class="text-red-600 cursor-pointer hover:saturate-200 hover:scale-105 rounded-lg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"/><path d="M7 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 15V9h3m2 6V9h3m-8 3h2.572M17 12h2.572"/></g></svg>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- products table end -->
        </div>
        <!-- rigthCol end -->




    </div>
</div>
</template>

<script setup>
definePageMeta({
    layout:'admin'
})
const tempPhotos = ref([])
const openDeleteModal=ref(false)
const delSelectedItem=ref(null)
const store = useProductsStore()
const products = computed(()=>{
    return useProductsStore().getProducts
})
const productsLive = computed(()=>{
    return useProductsStore().getProductsLive
})
const productsNotLive = computed(()=>{ 
    return useProductsStore().getProductsNotLive
})
const series =computed(()=>{ 
    return useProductsStore().getSeries
})
const subSeries =computed(()=>{ 
    return  useProductsStore().getSubSeries
})
const prices = computed(()=>{ 
    return useProductsStore().getPrices
})

const addform=reactive({
    title:"",
    series:"",
    subSeries:"",
    price:100,
    id:0,
    images:["https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"],
    isLive:true,
    photo:[],
    addTime:Date.now()
})

const checkForm =computed(()=>{
    return addform.title=="" || addform.series=="" || addform.subSeries=="" || tempPhotos.value.length<=0  ? true : false
})
const resetForm=()=>{
    addform.title=""
    addform.series=""
    addform.subSeries=""
    addform.price=100
    addform.id=0
    addform.images=["https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"]
    addform.isLive=true
}
const addProduct=()=>{
    addform.id=products.value.length
    addform.images=tempPhotos.value
    store.addNewProduct(addform)
    resetForm()
}

const setIsLive=(item,bool)=>{
    store.setProductIsLive(item,bool)
}

const openDelModal=(item)=>{
    console.log('item :>> ', item);
    delSelectedItem.value=item
    openDeleteModal.value=true
}
const closeDelModal=()=>{
    delSelectedItem.value=""
    openDeleteModal.value=false
}
const deletePermanent=()=>{
    console.log('delSelectedItem.value :>> ', delSelectedItem.value);
    store.deleteProductPermanent(delSelectedItem.value)
    openDeleteModal.value=false
}


const uploadPhotos =(event)=>{
    const photoLink = URL.createObjectURL(event.target.files[0])
    tempPhotos.value.push(photoLink);   
}
const deletePhoto =(photo)=>{
    tempPhotos.value=tempPhotos.value.filter( i => i != photo)
}
</script>
