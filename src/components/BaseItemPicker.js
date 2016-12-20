import BaseModal from '@lassehaslev/vue-modal';
import CanSelectItems from './mixins/CanSelectItems';
import HasItems from './mixins/HasItems';

export default {
    mixins: [ BaseModal, CanSelectItems, HasItems ],

    props: {
        url: {
            type: String,
            default: null,
        },
        autoclose: {
            type:Boolean,
            default: true,
        }
    },

    mounted() {
        // this.open();
    },

    methods: {
        confirm() {
            this.$emit( 'confirm', this.selectedItems );
            if (this.autoclose) {
                this.close();
            }
        },
        cancel() {
            this.$emit( 'cancel', this.selectedItems );
            this.close();
        },

    },

}
