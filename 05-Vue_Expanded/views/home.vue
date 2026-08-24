<template>

    <section class="container landing-page">

        <h1>
            Welcome to My Vue Website
        </h1>

        <p class="lead">
            This website demonstrates Vue components,
            Vue Router, loops, and conditional content.
        </p>

        <div class="message-box">

            <p v-if="showMessage">

                Welcome to the Vue demonstration!

            </p>

            <p v-else>

                Thanks for exploring my website!

            </p>

        </div>


        <button
            class="primary-button"
            @click="showMessage = !showMessage"
        >

            Change Message

        </button>

        <div class="features">

            <div
                v-for="feature in featureCards"
                :key="feature.id"
                class="feature-card"
            >

                <h2>
                    {{ feature.title }}
                </h2>

                <p>
                    {{ feature.description }}
                </p>

            </div>

        </div>

    </section>

</template>


<script setup>

import { ref } from "vue";

const showMessage = ref(true);

const featureCards = [

    {
        id: 1,
        title: "Vue Components",
        description:
            "Vue allows websites to be separated into reusable components."
    },

    {
        id: 2,
        title: "Vue Router",
        description:
            "Vue Router allows users to navigate between different views."
    },

    {
        id: 3,
        title: "Vue Directives",
        description:
            "Vue directives such as v-for and v-if make websites interactive."
    }

];

</script>