<template>

    <section class="container page-section">

        <h1>
            Responsive Images
        </h1>

        <p class="page-intro">
            These images are generated from a Vue array
            using v-for.
        </p>

        <div class="image-grid">

            <div
                v-for="image in images"
                :key="image.id"
                class="image-card"
            >

                <img
                    :src="image.url"
                    :alt="image.alt"
                >

                <h2>
                    {{ image.title }}
                </h2>

                <p>
                    {{ image.description }}
                </p>

            </div>

        </div>

    </section>

</template>


<script setup>

const images = [

    {
        id: 1,
        title: "Mountain",
        url: "https://picsum.photos/800/500?random=1",
        alt: "Placeholder mountain image",
        description:
            "A responsive image displayed using Vue."
    },

    {
        id: 2,
        title: "Nature",
        url: "https://picsum.photos/800/500?random=2",
        alt: "Placeholder nature image",
        description:
            "The image automatically adjusts to its container."
    },

    {
        id: 3,
        title: "Landscape",
        url: "https://picsum.photos/800/500?random=3",
        alt: "Placeholder landscape image",
        description:
            "Vue creates this card using v-for."
    },

    {
        id: 4,
        title: "Forest",
        url: "https://picsum.photos/800/500?random=4",
        alt: "Placeholder forest image",
        description:
            "This is another responsive image."
    },

    {
        id: 5,
        title: "Water",
        url: "https://picsum.photos/800/500?random=5",
        alt: "Placeholder water image",
        description:
            "The images resize for different screens."
    },

    {
        id: 6,
        title: "Adventure",
        url: "https://picsum.photos/800/500?random=6",
        alt: "Placeholder adventure image",
        description:
            "All six images are generated from the array."
    }

];

</script>