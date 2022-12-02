<template>
    <v-app>
        <FormularioInput/>

    </v-app>

</template>

<script>
import FormularioInput from "@/components/FormularioInput.vue"


export default {
    components: {
        FormularioInput
    },
    data() {

        return {

            obj: {

                email: '',
                firstname: '',
                lastname: '',
                genero: ''
            },
            loading: false,

            nameRules: [v => v.length >= 3 || "Debe tener mas de 3 caracteres"],
            emailRules: [v => v.length >= 3 || "Debe tener mas de 3 caracteres"],
            lastnameRules: [v => v.length >= 3 || "Debe tener mas de 3 caracteres"],
            generoRules: [v => v.length >= 3 || "Debe tener mas de 3 caracteres"],
        }

    },

    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$nextTick(() => {
                    this.$nuxt.$loading.start()
                    this.loading = true
                    this.$store.commit('store/updateUser', this.obj)

                    setTimeout(() => {
                        this.loading = false
                        this.$nuxt.$loading.finish()
                        this.$router.push('/')

                    }, 5000)

                })

            }

        },

    },
}
</script>