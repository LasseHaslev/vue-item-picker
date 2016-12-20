# @lassehaslev/vue-item-picker

> Item picker for Vue.js v2

## Installation
Run ```npm install @lassehaslev/vue-item-picker --save``` in your project folder

## Usage
This package is divided into two main modules. ```BaseItemPicker``` and ```BaseItemPickerItem```

#### Base item picker
```js
import { BaseItemPicker } from '@lassehaslev/vue-item-picker';
import ImagePickerItem from './ImagePickerItem';
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
                        <image-picker-item v-for="item in pickerItems" :selected="selectedItems" @confirm="confirm" @select="onItemSelect" :picker-item="item" :itemAdaptor="itemAdaptor"></image-picker-item>
                    </div>
                    <button class="button is-primary" @click="confirm">Confirm</button>
                    <button class="button is-default" @click="cancel">Cancel</button>
                </div>
            </div>
            <button class="modal-close" @click="close"></button>
        </div>
    `,

    mixins: [ BaseItemPicker ],

    components: {
        ImagePickerItem,
    }
}
```

#### Base item picker item
```js
import { BaseItemPickerItem } from '@lassehaslev/vue-item-picker';
export default {
    template: `
        <div class="column is-3">
            <div v-if="item.url"
                style="padding-bottom: 100%"
                @dblclick.prevent="confirm"
                @click="select"
                :style="{
                    'background-image': 'url(' + item.url + ')',
                    'background-size':'contain',
                    'background-position':'center',
                    'background-repeat': 'no-repeat',
                    'background-color': '#ccc',
                    'cursor':'pointer',
                    'outline': isSelected ? '5px solid #0762D9' : '',
            }">
            </div>
        </div>
    `,
    mixins: [ BaseItemPickerItem ],
}
```


## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
