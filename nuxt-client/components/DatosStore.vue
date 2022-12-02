<template>


    
    <v-card class="mt-10">
      <v-card-title>COMPONENTE DATA</v-card-title>
      <div v-if="userArr.length === 0">
       
          <v-card-title>No hay datos</v-card-title>
      
      </div>
      <div v-else>
        
      </div>
      <v-card  v-for="user in userArr" :key="user.id" class="mt-10" >
        <v-card-title>{{user.firstname}}</v-card-title>
        <v-card-title>{{user.lastname}}</v-card-title>
        <v-card-title >{{user.email}}</v-card-title>
        <v-card-title>{{user.genero}}</v-card-title>

      </v-card>
    </v-card>

  
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