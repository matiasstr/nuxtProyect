<template>
    <v-app>
        <v-form ref="form">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="obj.firstname" :rules="nameRules" :counter="10" label="First name" required></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field v-model="obj.lastname" :rules="lastnameRules" :counter="10" label="Last name" required></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field v-model="obj.email" :rules="emailRules" label="E-mail" required></v-text-field>
                        <v-text-field v-model="obj.genero" :rules="generoRules" label="Genero" required></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
        <v-btn class="mt-10"  :loading="loading" :disabled="loading" @click="submit">ACEPTAR</v-btn>
        <v-btn class="mt-10" to="/" :disabled="loading">CANCELAR</v-btn>
        <v-btn class="mt-10" to="/" :disabled="loading">A INDEX</v-btn>
    </v-app>

</template>

<script>


export default {


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