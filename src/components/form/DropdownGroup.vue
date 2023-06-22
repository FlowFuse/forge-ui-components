<template>
    <div class="ff-dropdown-group">
        <slot>{{ label }}</slot>
    </div>
</template>

<script>
export default {
    name: 'ff-dropdown-group',
    props: {
        label: {
            default: null,
            type: String
        }
    }
}
</script>
