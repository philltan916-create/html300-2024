<template>

    <section class="container page-section">

        <h1>
            Vue Accordion
        </h1>

        <p class="page-intro">
            Click a question to reveal the answer.
        </p>


        <div class="accordion">

            <div
                v-for="(item, key) in accordionItems"
                :key="key"
                class="accordion-item"
            >

                <button
                    class="accordion-button"
                    @click="toggleAccordion(key)"
                >

                    <span>
                        {{ item.question }}
                    </span>

                    <span>
                        {{ activeItem === key ? "−" : "+" }}
                    </span>

                </button>

                <div
                    v-if="activeItem === key"
                    class="accordion-content"
                >

                    <p>
                        {{ item.answer }}
                    </p>

                </div>

            </div>

        </div>

    </section>

</template>


<script setup>

import { ref } from "vue";

const accordionItems = {

    first: {
        question: "What is Vue?",
        answer:
            "Vue is a JavaScript framework used to create interactive user interfaces."
    },

    second: {
        question: "What is Vue Router?",
        answer:
            "Vue Router allows users to navigate between different pages or views in a Vue application."
    },

    third: {
        question: "What is a Vue component?",
        answer:
            "A Vue component is a reusable part of a Vue application."
    },

    fourth: {
        question: "What does v-for do?",
        answer:
            "The v-for directive allows Vue to repeat content using information stored in arrays or objects."
    },

    fifth: {
        question: "What does v-if do?",
        answer:
            "The v-if directive conditionally displays content."
    }

};

const activeItem = ref(null);

function toggleAccordion(key) {

    if (activeItem.value === key) {

        activeItem.value = null;

    } else {

        activeItem.value = key;

    }

}

</script>