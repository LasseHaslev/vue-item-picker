export default {
    props: {
        'picker-item': {
            type: Object,
            default:null,
        },
        itemAdaptor: {
            type: Function,
            default( item ) {
                return item;
            }
        },
        selected: {
            default: [],
        },
    },

    computed: {
        item() {
            return this.itemAdaptor( this.pickerItem );
        },

        'isSelected'() {
            return this.isEqual(this.selected, this.item);
            // var index = this.selected.indexOf( this.item.id );
            // return index != -1 ? true : false;
        },
    },

    methods: {
        isEqual( obj1, obj2 ) {

            // Quick check if has the same count of keys,
            // if not we know this is not the same object
            var values1 = Object.values( obj1 );
            var values2 = Object.values( obj2 );
            if ( values1.length != values2.length ) {
                return false;
            }

            // Check if values is same
            values1 = values1.sort();
            values2 = values2.sort();
            if ( JSON.stringify( values1 ) != JSON.stringify( values2 ) ) {
                return false;
            }

            console.log('last step!');
            // Check if all keys is the same 
            var keys1 = Object.keys( obj1 ).sort();
            var keys2 = Object.keys( obj2 ).sort();
            return JSON.stringify( keys1 ) == JSON.stringify( keys2 );

        },
        select() {
            this.$emit( 'select', this.item );
        },
        confirm() {
            this.$emit( 'confirm', this.pickerItem )
        },
    },

}
