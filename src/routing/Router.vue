<template>
    <div class="container">
        <Navbar />
        <router-view></router-view>
    </div>
</template>
<script>
import { Navbar } from "../core/Navbar";

export default {
    name: "RouterComponent",
    components: { Navbar }
}
</script>
<style scoped>
.container {
    position: relative;
}
</style>
