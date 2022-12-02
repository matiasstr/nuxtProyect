<template>


    <v-container>

      <v-card class="mt-7 pa-3" min-height="690" color="indigo">
        <v-row justify="center" class="">
          <v-card-title>COMPONENTE DATA</v-card-title>

        </v-row>
        <div v-if="userArr.length === 0">
          <v-row justify="center" class="mt-6">
            <v-card-title>No hay datos</v-card-title>

          </v-row>
        
        </div>
        <div v-else>
          
        </div>
        <v-card  v-for="user in userArr" :key="user.id" class="mt-10" shaped>
          <v-card-title>{{user.firstname}}</v-card-title>
          <v-card-title>{{user.lastname}}</v-card-title>
          <v-card-text >{{user.email}}</v-card-text>
          <v-card-text>{{user.genero}}</v-card-text>
  
        </v-card>
      </v-card>

    </v-container>

  
</template>

<script>
    export default{
      data(){

        return {
          userArr: this.$store.state.store.user,
        }
      }
    }

</script>