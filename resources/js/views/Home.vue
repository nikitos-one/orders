<template>
    <div id="app">
        <v-app-bar
            app
            color="primary"
            dark
        >
            <v-toolbar-title>Заказы</v-toolbar-title>
        </v-app-bar>

        <div class="d-flex justify-center">
            <v-data-table
                class="elevation-1 mb-10 mt-10"
                :headers="clientsTableHeaders"
                :items="clientsList"
                item-key="id"
                hide-default-footer
                :loading="loading"
                loading-text="Загрузка..."
            />
        </div>

    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {},
    data: () => ({
        loading: true,
        clientsTableHeaders: [
            {text: 'ID', value: 'id'},
            {text: 'Клиент', value: 'name'},
            {text: 'Кол-во заказов < 1000 руб.', value: 'orders_less_1000_count', align: 'center'},
            {text: 'Кол-во заказов > 1000 руб.', value: 'orders_more_1000_count', align: 'center'},
        ],
    }),
    methods: {
        getClientsList() {
            this.$store.dispatch('getClientsList');
        },
    },
    computed: {
        clientsList: {
            get() {
                return this.$store.state.clientsList;
            }
        },
    },
    watch: {
        clientsList: function (val) {
            if (val.length) {
                this.loading = false;
            }
        }
    },
    beforeMount() {
        this.getClientsList();
    },
}
</script>

<style lang="sass">

</style>
