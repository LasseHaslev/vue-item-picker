import BaseItemPicker from '../../index';
import ImagePickerItem from './ImagePickerItem';
import axios from 'axios';
export default {
    template: `
        <div class="modal"
             :class="{ 'is-active': isShowingModal }">
            <div class="modal-background" @click="close"></div>
            <div class="modal-content">
                <div class="box">
                    <slot>
                        <h4 class="title">Please select an image</h4>
                    </slot>
                    <div class="columns is-mobile is-multiline">
                        <image-picker-item v-for="item in items" :selected="selectedItems" @confirm="confirm" @select="onItemSelect" :item="item"></image-picker-item>
                    </div>
                    <button class="button is-primary" @click="confirm">Confirm</button>
                    <button class="button is-default" @click="cancel">Cancel</button>
                </div>
            </div>
            <button class="modal-close" @click="close"></button>
        </div>
    `,

    mixins: [ BaseItemPicker ],

    props: {
        url: {
            type: String,
            required: true,
        }
    },

    methods: {
        onModalOpen() {
            this.loadImages();
        },
        loadImages() {
            var self = this;
            axios.get( this.url ).then( function( response ) {
                var images = response.data.slice( 0,10 );
                self.removeAll();
                self.add( images );
            } );
        }
    },

    components: {
        ImagePickerItem,
    }
}
