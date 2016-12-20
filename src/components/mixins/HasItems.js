export default {
    props: {
        itemsAdaptor: {
            type: Function,
            default( items ) {
                return items;
            },
        },
        itemAdaptor: {
            type: Function,
            default( items ) {
                return items;
            },
        },
    },

    data() {
        return {
            pickerItems: [],
        }
    },

    methods: {
        onModalOpen() {
            this.loadItems();
        },
        loadItems() {
            this.$http.get( this.url ).then( function( response ) {
                this.pickerItems = this.itemsAdaptor( response.body );
                this.$emit( 'items-loaded' );

            } ).catch( function( response ) {
                console.log( response );
            } )
        },
    },
}
