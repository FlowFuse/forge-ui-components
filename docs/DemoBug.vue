<template>
    <!-- v-ff-tooltip appends a span to this div which seems to break Vue.js when the state changes -->
    <div v-ff-tooltip="'Hello World'">
        <span v-if="on">On</span>
    </div>
    <button @click="toggle">Toggle State</button>
</template>

<script>

export default {
    name: 'DemoBug',
    data () {
        return {
            on: true
        }
    },
    methods: {
        toggle () {
            this.on = !this.on
        }
    }
}
</script>
