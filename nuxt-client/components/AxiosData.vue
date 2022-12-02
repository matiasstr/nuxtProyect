<template>
  <div>
    <v-card class="mt-10" color="indigo">
      <v-row justify="center" class="mt-6">

        <v-card-title >COMPONENTE AXIOS</v-card-title>
      </v-row>
    </v-card>
    <v-card height="600" class="mt-9" >
      <v-container fill-height>
        <v-flex v-if="axiosData.length === 0">
          <v-row justify="center" align-items="center">
            <v-col cols="2">
              <v-progress-circular
                :size="200"
                :width="15"
                color="indigo"
                indeterminate
              ></v-progress-circular>
            </v-col>
          </v-row>
        </v-flex>
        <v-flex v-else>


          <v-row :align="center" no-gutters>
            <v-col v-for="n in shownCards" :key="n" cols="4">
              <v-card max-width="300" max-height="220" class="mt-10 mx-2">
                <v-img
                  height="200"
                  width="300"
                  :src="n.background_image"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>

        </v-flex>

   
      </v-container>
    </v-card>

    <div class="text-center mt-5">
      <v-pagination v-model="page" :length="length" color="indigo"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      axiosData: [],
      page: 1,
      length: 3,
      alignments: ['center'],
    }
  },
  async fetch() {
    const ip = await this.$axios.get(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=20`
    )
    this.axiosData = ip.data.results
    // console.log(this.axiosData)
  },
  computed: {
    shownCards() {
      const { page, length } = this
      const number = Math.floor(this.axiosData.length / length) // Numero de elementos a mostrar por página
      return this.axiosData.slice((page - 1) * number, page * number)
    },
  },
}
</script>
