<template>
    <div
        class="rounded-2xl h-3/6 flex justify-between items-center flex-col bg-white p-8 w-4/12"
    >
        <h2 class="text-3xl font-semibold title">Login</h2>
        <div class="w-4/5">
            <FormulateForm>
                <FormulateInput
                    label-class="title"
                    input-class="border-b w-full border-gray-400 w-4/5 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  "
                    wrapper-class="my-2"
                    type="email"
                    label="E-mail"
                    name="email"
                    validation="required"
                    :validation-messages="{
                        required: 'O campo não pode ser vazio',
                    }"
                    placeholder="email@mail.com"
                />
                <FormulateInput
                    label-class="title"
                    wrapper-class="my-2"
                    input-class="border-b w-full border-gray-400 w-4/5 py-2.5 px-1.5 block outline-0 outline-transparent sm:text-sm  "
                    type="password"
                    label="Senha"
                    name="senha"
                    validation="required"
                    :validation-messages="{
                        required: 'O campo não pode ser vazio',
                    }"
                    placeholder="*********"
                />

                <FormulateInput
                    type="submit"
                    name="Esqueci a senha!"
                    wrapper-class="button rounded-3xl  flex content-center items-center"
                    input-class="title py-2.5 px-7.5 w-full block font-semibold"
                />
            </FormulateForm>
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
    layout: 'AuthLayout',
}
</script>

<style>
.title {
    color: rgb(38 38 38);
}
.button {
  background-color: #ffd60a;
  display: block;
  text-align: center;
}
</style>
