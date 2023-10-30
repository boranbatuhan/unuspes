<template>
    <div class="min-h-screen w-full"  >
        <div class="container mx-auto  font-now w-full ">
            <my-h :header="user.name+' '+user.surname"/>
            <!-- open edit button start-->
            <div v-if="!editInfos" class="w-fit h-fit ml-auto cursor-pointer" @click="editInfos = !editInfos"> <svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"/></g></svg></div>
            <!-- open edit button end -->

            <!-- save edit button end -->
            <div v-if="editInfos" class="w-fit h-fit ml-auto cursor-pointer" @click="saveEdit"> <svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M10.25 2.75h-7.5v10.5h10.5v-3.5"/><path d="m5.75 7.75l2.5 2.5l6-6.5"/></g></svg></div>
            <!-- save edit button end -->
            
            <!-- edit table start -->
            <ul v-if="editInfos" class="w-full overflow-x-auto " >
                <li class="my-4 py-2 text-center">
                    <p class="text-start font-bold text-xl">Kişisel Bilgiler.</p>
                    <div class="h-px w-48 bg-gradient-to-r from-sky-600 my-2 via-sky-600 to-transparent"></div>
                    <table>
                        <thead>
                            <tr>
                                <th class="bg-sky-300 px-1  min-w-[4rem] text-center">Ad</th>
                                <th class="bg-sky-200 px-1  min-w-[4rem] text-center">Soyad</th>
                                <th class="bg-sky-300 px-1  min-w-[4rem] text-center">Telefon</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="bg-sky-200 p-1"><input class="outline-sky-600" type="text" :placeholder="user.name" v-model="updateForm.name"></td>
                                <td class="bg-sky-100 p-1"><input class="outline-sky-600" type="text" :placeholder="user.surname" v-model="updateForm.surname"></td>
                                <td class="bg-sky-200 p-1"><input class="outline-sky-600" type="text" :placeholder="user.phone" v-model="updateForm.phone"></td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <li class="my-4 py-2 text-center">
                    <p class="text-start font-bold text-xl">Adres Bilgisi</p>
                    <div class="h-px w-48 bg-gradient-to-r from-sky-600 my-2 via-sky-600 to-transparent"></div>
                    <table>
                        <thead>
                            <tr>
                                <th class="bg-sky-300 px-1 min-w-[4rem] text-center">Şehir</th>
                                <th class="bg-sky-200 px-1 min-w-[4rem] text-center">İlçe</th>
                                <th class="bg-sky-300 px-1 min-w-[4rem] text-center">Mahalle</th>
                                <th class="bg-sky-200 px-1 min-w-[4rem] text-center">Sokak</th>
                                <th class="bg-sky-300 px-1 min-w-[4rem] text-center">Bina no</th>
                                <th class="bg-sky-200 px-1 min-w-[4rem] text-center">Kapı no</th>
                                <th class="bg-sky-300 px-1 min-w-[4rem] text-center">Adres Detayı</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="bg-sky-200 p-1"><input class="w-20 outline-sky-600" type="text" :placeholder="user.adress.city" v-model="updateForm.adress.city"></td>
                                <td class="bg-sky-100 p-1"><input class="w-20 outline-sky-600" type="text" :placeholder="user.adress.subcity" v-model="updateForm.adress.subcity"></td>
                                <td class="bg-sky-200 p-1"><input class="w-20 outline-sky-600" type="text" :placeholder="user.adress.district" v-model="updateForm.adress.district"></td>
                                <td class="bg-sky-100 p-1"><input class="w-20 outline-sky-600" type="text" :placeholder="user.adress.street" v-model="updateForm.adress.street"></td>
                                <td class="bg-sky-200 p-1"><input class="w-20 outline-sky-600" type="text" :placeholder="user.adress.buildno" v-model="updateForm.adress.buildno"></td>
                                <td class="bg-sky-100 p-1"><input class="w-20 outline-sky-600" type="text" :placeholder="user.adress.doorno" v-model="updateForm.adress.doorno"></td>
                                <td class="bg-sky-200 p-1"><input class="w-20 outline-sky-600" type="text" :placeholder="user.adress.details" v-model="updateForm.adress.details"></td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
            <!-- edit table end -->

            <!-- info start -->
            <ul  v-if="!editInfos"  >
                <li class="my-4 py-2 text-center">
                    <p class="text-start font-bold text-xl">Kişisel Bilgiler.</p>
                    <div class="h-px w-48 bg-gradient-to-r from-sky-600 my-2 via-sky-600 to-transparent"></div>
                    <table>
                        <thead>
                            <tr>
                                <th class="bg-sky-300 px-1  min-w-[4rem] text-center">Ad</th>
                                <th class="bg-sky-200 px-1  min-w-[4rem] text-center">Soyad</th>
                                <th class="bg-sky-300 px-1  min-w-[4rem] text-center">Telefon</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="bg-sky-200 px-1 ">{{user.name}}</td>
                                <td class="bg-sky-100 px-1 ">{{user.surname}}</td>
                                <td class="bg-sky-200 px-1 ">{{user.phone}}</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <li class="my-4 py-2 text-center">
                    <p class="text-start font-bold text-xl">Adres Bilgisi</p>
                    <div class="h-px w-48 bg-gradient-to-r from-sky-600 my-2 via-sky-600 to-transparent"></div>
                    <table>
                        <thead>
                            <tr>
                                <th class="bg-sky-300 px-1 min-w-[4rem] text-center">Şehir</th>
                                <th class="bg-sky-200 px-1 min-w-[4rem] text-center">İlçe</th>
                                <th class="bg-sky-300 px-1 min-w-[4rem] text-center">Mahalle</th>
                                <th class="bg-sky-200 px-1 min-w-[4rem] text-center">Sokak</th>
                                <th class="bg-sky-300 px-1 min-w-[4rem] text-center">Bina no</th>
                                <th class="bg-sky-200 px-1 min-w-[4rem] text-center">Kapı no</th>
                                <th class="bg-sky-300 px-1 min-w-[4rem] text-center">Adres Detayı</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="bg-sky-200 px-1">{{user.adress.city}}</td>
                                <td class="bg-sky-100 px-1">{{user.adress.subcity}}</td>
                                <td class="bg-sky-200 px-1">{{user.adress.district}}</td>
                                <td class="bg-sky-100 px-1">{{user.adress.street}}</td>
                                <td class="bg-sky-200 px-1">{{user.adress.buildno}}</td>
                                <td class="bg-sky-100 px-1">{{user.adress.doorno}}</td>
                                <td class="bg-sky-200 px-1">{{user.adress.details}}</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
            <!-- info end -->
        </div>

    </div>
</template>

<script setup>

const user = computed(()=>{
    return useUserStore().getUser
})
const editInfos = ref(false)

const updateForm = reactive({
    name:"",
    surname:"",
    phone:"",
    adress:{
      city:"",
      subcity:"",
      district:"",
      street:"",
      buildno:"",
      doorno:"",
      details:""  
    }
})

const checkInputs =(data,user)=>{
    for (const key in data) {
        if (typeof data[key] === 'string' && (data[key] === "" || data[key] === null)) {
            data[key] = user[key];
        } else if (typeof data[key] === 'object') {
            checkInputs(data[key], user[key]);
        }
    }
}

const saveEdit =()=>{
    editInfos.value=false
    checkInputs(updateForm,user.value)
    useUserStore().updateUser(updateForm)
}



</script>
