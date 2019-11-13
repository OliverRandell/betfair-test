<template>
    <section class="container section-more-projects">
        <div class="row">
            <header>
            <h3>More Projects</h3>
            <p>This is some dummy text</p>
            </header>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-3 text-center" v-for="(item, index) in moreProjects" :key="index">
            <div class="img-wrapper">
                <figure><img :src="item.imgSrc" :alt="item.imgAlt"></figure>
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
            </div>
        </div>
    </section>    
</template>

<script>
export default {
    name: "MoreProjects",
    data(){
        return {
            moreProjects: [
                {
                imgSrc: "",
                imgAlt: "Image 1",
                title: "Project name",
                text: "Lorum ipsum dolor sit amit."
                },
                {
                imgSrc: "",
                imgAlt: "Image 2",
                title: "Project name",
                text: "Lorum ipsum dolor sit amit."
                },
                {
                imgSrc: "",
                imgAlt: "Image 3",
                title: "Project name",
                text: "Lorum ipsum dolor sit amit."
                },
                {
                imgSrc: "",
                imgAlt: "Image 4",
                title: "Project name",
                text: "Lorum ipsum dolor sit amit."
                }
            ]
        }
    }
}
</script>