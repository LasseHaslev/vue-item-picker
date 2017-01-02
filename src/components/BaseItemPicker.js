import BaseModal from '@lassehaslev/vue-modal';
import CanSelectItems from './mixins/CanSelectItems';

import BaseCrud from '@lassehaslev/vue-crud';

export default {
    mixins: [ BaseModal, CanSelectItems, BaseCrud ],

    props: {
        autoclose: {
            type:Boolean,
            default: true,
        }
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
