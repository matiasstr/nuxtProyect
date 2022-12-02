<template>








  <v-form ref="form">
    <v-container fill-height>
      <v-card heigth="700" width="9000" class="pa-10">



        <v-row justify="center" align-items="center">


          <v-col cols="6">
            <v-text-field
              v-model="obj.firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
              class="mt-10"
              color="indigo"
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="obj.lastname"
              :rules="lastnameRules"
              :counter="10"
              label="Last name"
              required
              class="mt-10"
              color="indigo"
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="obj.email"
              :rules="emailRules"
              label="E-mail"
              required
              class="mt-10"
              color="indigo"
            ></v-text-field>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="obj.genero"
              :rules="generoRules"
              label="Genero"
              required
              class="mt-10"
              color="indigo"
            ></v-text-field>
          </v-col>

          <v-row justify="center">

              <v-col cols="3">
      
      
                  <v-btn
                    class="mt-10"
                    :loading="loading"
                    :disabled="loading"
                    color="indigo"
                    @click="submit"
                    >ACEPTAR</v-btn
                  >
              </v-col>

          </v-row>

          <v-row justify="center">

              <v-col cols="1">
      
                  <v-btn class="mt-10" to="/" :disabled="loading" color="indigo">CANCELAR</v-btn>
              </v-col>

          </v-row>

        </v-row>
      


          


                <v-row justify="center">
        
                </v-row>

         
        
          
     
      </v-card>
      <v-row justify="center">

          <v-btn class="mt-10" to="/" :disabled="loading" color="indigo">A INDEX</v-btn>
      </v-row>
    </v-container>

  </v-form>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        email: '',
        firstname: '',
        lastname: '',
        genero: '',
      },
      loading: false,

      nameRules: [(v) => v.length >= 3 || 'Debe tener mas de 3 caracteres'],
      emailRules: [(v) => v.length >= 3 || 'Debe tener mas de 3 caracteres'],
      lastnameRules: [(v) => v.length >= 3 || 'Debe tener mas de 3 caracteres'],
      generoRules: [(v) => v.length >= 3 || 'Debe tener mas de 3 caracteres'],
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
