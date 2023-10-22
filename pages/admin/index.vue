<template>
    <div class="min-h-screen flex items-center justify-center bg-stone-50">
        <div class="graborder-anim p-4 rounded-lg flex flex-col items-end gap-3">
            <label for="id">
                id:
                <input v-model="loginForm.id" type="text" name="id" id="id" class="outline-none p-2 graborder-anim rounded-lg" autocomplete="off" spellcheck="off">
            </label>
            <label for="password">
                password:
                <input v-model="loginForm.password" type="password" name="password" id="password" class="outline-none p-2 graborder-anim rounded-lg" autocomplete="off" spellcheck="off">
            </label>
            <my-button @click="login" name="giriş"/>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout:'admin'
})

const loginForm = reactive({
    id:"",
    password:""
})

const login = ()=>{
    console.log('loginForm :>> ', loginForm);
    useRouter().push("/admin/dashboard")
}

</script>
