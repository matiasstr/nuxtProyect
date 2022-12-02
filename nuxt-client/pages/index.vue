<template>
  <v-app>

    <AxiosData />
  
  
    <DatosStore />
    <v-btn class="mt-10" to="/formulario">A FORMULARIO</v-btn>
  </v-app>


</template>

<script>
import DatosStore from "@/components/DatosStore.vue"
import AxiosData from "@/components/AxiosData.vue"
export default {
  components:{
    DatosStore,
    AxiosData
  },
  data() {
    return {
      userArr : this.$store.state.store.user,
    }
  },
  methods: {

  },
}

</script>