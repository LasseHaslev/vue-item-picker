export default {
    props: {

        selected: {
            default: null,
        },

    },

    data() {
        return {
            selectedItems: [],
        }
    },

    methods: {

        onItemSelect( item ) {
            this.selectedItems = item;
        },

    }
}
