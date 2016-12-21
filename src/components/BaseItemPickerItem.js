import CanCheckItemSelected from './mixins/CanCheckItemSelected';
export default {

    mixins: [ CanCheckItemSelected ],

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
