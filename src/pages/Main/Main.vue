<template>
    <div class="main">
        <div class="main-content">
            <form>
                <select name="country" @change="handleChange">
                    <option disabled selected>Выберите страну</option>
                    <option 
                        v-for="country in countries" 
                        :key="country"
                        :value="country"
                    >{{ country }}</option>
                </select>
            </form>
            <StatGraph :dataCountry="dataByCountry" />
        </div>
    </div>
</template>
<script>
import { ApiService } from "../../shared/api";
import { StatGraph } from "./components";

export default {
    name: "Main",

    components: { StatGraph },

    data() {
        return {
            countries: [],
            dataByCountry: []
        }
    },

    methods: {
        fetchCountries: async function() {
            try {
                const { data } = await ApiService.getCountries();
                this.countries = data.map((country) => country.Country)
            } catch(error) {
                console.log(error.message);
            }
        },

        fetchDataByCountry: async function(countryName) {
            try {
                const { data } = await ApiService.getStatByCountry(countryName);

                this.dataByCountry = data.map((countryItem) => ({ 
                    name: countryItem.Country,
                    recovered: countryItem.Recovered,
                    confirmed: countryItem.Confirmed,
                    date: countryItem.Date
                }))
                console.log(data);
            } catch(error) {
                console.log(error.message);
            }
        },

        handleChange(event) {
            const value = event.currentTarget.value;
            this.fetchDataByCountry(value);
        }
    },

    mounted() {
        this.fetchCountries();
    }
}
</script>
<style scoped>
.main {

}

.main-content {
    max-width: 1200px;
    padding: 50px 50px;
    margin: auto;
}

.main form {
    margin-bottom: 20px;
}

.main form select {
    padding: 5px;
    font-size: 18px;
}
</style>