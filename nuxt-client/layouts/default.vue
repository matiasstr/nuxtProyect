<template>
  <div>


    <v-app>

      <v-card class="overflow-hidden ">
        <v-card-title v-if="$route.path === '/'">
          Index
        </v-card-title>
        <div v-else>
          <v-card-title> {{ $route.path.replace("/f", "F") }}</v-card-title>
        </div>
      </v-card>

      <Nuxt />


    </v-app>



  </div>


</template>

<script >

export default {

  data: () => ({


  }),

  methods: {

  },
}
</script>
