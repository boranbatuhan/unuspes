<template>
<div class="min-h-screen flex items-center justify-start flex-col bg-stone-50 font-now">
    <div class="container flex flex-row items-start justify-start flex-wrap mx-auto p-3 ">

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

                    <input :disabled="checkForm" @click="addProduct" type="submit" value="Kaydet" id="submit" class="text-center cursor-pointer w-full disabled:pointer-events-none disabled:saturate-0 bg-gradient-to-t from-sky-400 via-sky-600 to-sky-400 hover:to-blue-400 hover:from-blue-400 hover:via-blue-600  py-2 rounded-lg transition-all border-2 border-purple-500/50  font-bold scale-100 hover:scale-105 active:scale-100 text-white px-4">

            </div>
            <!-- add product end -->


        </div>
        <!-- leftCol end -->


        <!-- rigthCol start -->
        <div class="w-auto flex items-center justify-start flex-col p-7 gap-7">

            <!-- product counters start -->
            <div class="graborder-anim w-full p-3 drop-shadow-lg  rounded-lg justify-between  flex shrink-0">
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
        <div class="max-h-80 drop-shadow-lg graborder rounded-lg overflow-y-scroll w-full overflow-x-auto" style="--turn:0.5">
            <table class="w-full ">
                <thead class="sticky top-0">
                    <tr class="bg-sky-500 text-end">
                        <th class="p-2">#</th>
                        <th class="p-2">Title</th>
                        <th class="p-2">images</th>
                        <th class="p-2">Series</th>
                        <th class="p-2">SubSeries</th>
                        <th class="p-2">Price</th>
                        <th class="p-2">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item.id" class="bg-sky-200 text-end odd:bg-sky-300" :class="{'saturate-0 opacity-70':!item.isLive}">
                        <td class="p-1">{{item.id}}</td>
                        <td class="p-1 w-32 truncate">{{item.title}}</td>
                        <td class="p-1"><div class="w-8 h-8"> <img :src="productimg(item.images)" alt="prodcutimg" draggable="false"></div></td>
                        <td class="p-1 w-32 truncate">{{item.series}}</td>
                        <td class="p-1 w-32 truncate">{{item.subSeries}}</td>
                        <td class="p-1">{{item.price}}</td>
                        <td class="p-1"></td>
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

const store = useProductsStore()
const products = useProductsStore().getProducts
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
    images:"noimg",
    isLive:true,
    addTime:Date.now()
})


const productimg =(p)=>{
    return p !="noimg" ? p : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
}
const checkForm =computed(()=>{
    return addform.title=="" || addform.series=="" || addform.subSeries==""  ? true : false
})
const resetForm=()=>{
    addform.title=""
    addform.series=""
    addform.subSeries=""
    addform.price=100
    addform.id=0
    addform.images="noimg"
    addform.isLive=true
}
const addProduct=()=>{
    store.addNewProduct(addform)
    resetForm()
}
</script>
