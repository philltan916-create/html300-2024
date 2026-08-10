<template>

    <section class="container page-section">

        <h1>
            Responsive Grid
        </h1>

        <p class="page-intro">
            This page demonstrates a responsive CSS grid.
        </p>

        <div class="vue-grid">

            <div
                v-for="card in gridCards"
                :key="card.id"
                class="grid-card"
            >

                <h2>
                    {{ card.title }}
                </h2>

                <p>
                    {{ card.description }}
                </p>

            </div>

        </div>

    </section>

</template>


<script setup>

const gridCards = [

    {
        id: 1,
        title: "Column One",
        description:
            "This is the first grid component."
    },

    {
        id: 2,
        title: "Column Two",
        description:
            "This is the second grid component."
    },

    {
        id: 3,
        title: "Column Three",
        description:
            "This is the third grid component."
    },

    {
        id: 4,
        title: "Column Four",
        description:
            "The grid changes size on smaller screens."
    },

    {
        id: 5,
        title: "Column Five",
        description:
            "CSS Grid replaces the Bootstrap grid system."
    },

    {
        id: 6,
        title: "Column Six",
        description:
            "This completes the responsive grid."
    }

];

</script>