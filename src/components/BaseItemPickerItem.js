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
            return this.selected == this.item;
            // var index = this.selected.indexOf( this.item.id );
            // return index != -1 ? true : false;
        },
    },

    methods: {
        select() {
            this.$emit( 'select', this.item );
        },
        confirm() {
            this.$emit( 'confirm', this.pickerItem )
        },
    },

}
