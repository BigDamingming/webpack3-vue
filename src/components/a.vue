<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        created() {
            this.$fetch({
                url: '/123',
                method: 'post'
            });
        },
        data() {
            return {
                msg: '淘宝',
            };
        },
    }
</script>