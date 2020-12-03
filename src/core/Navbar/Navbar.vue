<template>
    <div class="navbar">
        <div class="navbar-content">
            <h2 class="navbar-title">CORONA STAT V.1</h2>
            <ul class="navbar-links">
                <li :class="{'navbar-link': true, 'navbar-link-active': activePath === '/'}">
                    <a @click.prevent="changePath('/')" href="#">Главная</a>
                </li>
                <li :class="{'navbar-link': true, 'navbar-link-active': activePath === '/about'}">
                    <a @click.prevent="changePath('/about')" href="#">О сервисе</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "Navbar",

    data() {
        return {
            activePath: '/'
        }
    },

    methods: {
        changePath(path) {
            this.activePath = path
            this.$router.push(path);
        }
    }
}
</script>
<style scoped>
.navbar {
    position: sticky;
    top: 0;
    box-shadow: 0 3px 15px #dddddd;
}

.navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding: 20px 50px;
}

.navbar-links {
    margin: 0;
    padding: 0;
    display: flex;
}

.navbar-link {
    list-style-type: none;
}

.navbar-link a {
    text-decoration: none;
    color: #555555;
    padding: 20px 40px;
}

.navbar-link-active a {
    background-color: #eeeeee;
}

.navbar-title {
    margin: 0;

}
</style>