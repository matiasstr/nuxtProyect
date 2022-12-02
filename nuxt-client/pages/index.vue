<template>
  <v-app>

    <v-container>
      <v-row>

        <v-col cols="12" md="3">

          <DatosStore />
        </v-col>

        <v-spacer></v-spacer>
        <v-col cols="12" md="9">

          <AxiosData />
        </v-col >
      </v-row>

      <v-container>
        <v-row justify="center">
          <v-btn class="mt-10" to="/formulario" color="indigo">A FORMULARIO</v-btn>
        </v-row>
      </v-container>

    </v-container>
  </v-app>


</template>

<script>
import DatosStore from "@/components/DatosStore.vue"
import AxiosData from "@/components/AxiosData.vue"
export default {
  components: {
    DatosStore,
    AxiosData
  },
  data() {
    return {
      userArr: this.$store.state.store.user,
    }
  },
  methods: {

  },
}

</script>