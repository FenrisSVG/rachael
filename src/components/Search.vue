<template>
    <div class="search">
        <i class="fas fa-search"></i>
        <input type="text" id="search" placeholder="Search..."
            v-model="search">
    </div>
</template>

<script>
export default {
   name: 'Search',
   computed:{
    search:{
        get(){
            return this.$store.state.filter.query
        },
        set(val){
            this.$store.commit('SET_QUERY',val)
        }
    }
   }

}
</script>
