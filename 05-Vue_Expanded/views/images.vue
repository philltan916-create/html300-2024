<template>

    <section class="container page-section">

        <Header>

            Responsive Images

        </Header>


        <p class="page-intro">

            Click an image to toggle its border.

        </p>

        <div class="image-grid">

            <ImageCard
                v-for="image in images"
                :key="image.id"

                :src="image.url"
                :alt="image.alt"
                :title="image.title"
            >

                <p>
                    {{ image.description }}
                </p>

            </ImageCard>

        </div>

    </section>

</template>


<script setup>


import ImageCard
    from "../components/ImageCard.vue";

import Header
    from "../components/Header.vue";

const images = [

    {
        id: 1,

        title: "Mountain",

        url: "https://picsum.photos/800/500?random=1",

        alt: "Placeholder mountain image",

        description:
            "A responsive mountain image."
    },


    {
        id: 2,

        title: "Nature",

        url: "https://picsum.photos/800/500?random=2",

        alt: "Placeholder nature image",

        description:
            "A responsive nature image."
    },


    {
        id: 3,

        title: "Landscape",

        url: "https://picsum.photos/800/500?random=3",

        alt: "Placeholder landscape image",

        description:
            "A responsive landscape image."
    },


    {
        id: 4,

        title: "Forest",

        url: "https://picsum.photos/800/500?random=4",

        alt: "Placeholder forest image",

        description:
            "A responsive forest image."
    },


    {
        id: 5,

        title: "Water",

        url: "https://picsum.photos/800/500?random=5",

        alt: "Placeholder water image",

        description:
            "A responsive water image."
    },


    {
        id: 6,

        title: "Adventure",

        url: "https://picsum.photos/800/500?random=6",

        alt: "Placeholder adventure image",

        description:
            "A responsive adventure image."
    }

];

</script>