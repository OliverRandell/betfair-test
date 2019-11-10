<template>
    <section class="breakout-area">
        <div class="container">
            <div class="row">
                <div class="text">
                    <h3>{{ title }}</h3>
                    <p>{{ text }}</p>
                </div>
            </div>
            <img :src="imgSrc" :alt="imgAlt">
        </div>
    </section>
</template>

<script>
export default {
    name: "BreakoutArea",
    data() {
        return {
            title: "Breakout Area",
            text: `Lorum ipsum`,
            imgSrc: "",
            imgAlt: ""
        }
    }
}
</script>