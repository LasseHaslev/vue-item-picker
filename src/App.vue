<template>
    <div id="app">
        <section class="section">
            <div class="container">
                <h3 class="title is-1">
                    <a href="https://github.com/LasseHaslev/vue-item-picker">
                        @lassehaslev/vue-item-picker
                    </a>
                </h3>
            </div>
        </section>

        <simple-image-picker></simple-image-picker>
        <!--<multiple-image-picker></multiple-image-picker>-->

        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container is-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SimpleImagePicker from './tutorials/SimpleImagePicker';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        SimpleImagePicker,
    }
}
</script>
