import CanCheckItemSelected from './mixins/CanCheckItemSelected';
export default {

    mixins: [ CanCheckItemSelected ],

    props: {
        item: {
            type: Object,
            default:null,
        },
        selected: {
            default() {
                return [];
            },
        },
    },

    methods: {
        select() {
            this.$emit( 'select', this.item );
        },
        confirm() {
            this.$emit( 'confirm', this.item )
        },
    },

}
