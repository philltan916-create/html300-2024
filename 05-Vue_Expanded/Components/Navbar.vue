<template>

    <nav class="navbar">

        <div class="navbar-container">

           
            <RouterLink
                to="/"
                class="navbar-brand"
            >
                Vue Demo
            </RouterLink>


            <ul class="navbar-links">

                <li
                    v-for="link in navLinks"
                    :key="link.name"
                >

                    <RouterLink
                        :to="link.path"
                        class="nav-link"
                    >
                        {{ link.name }}
                    </RouterLink>

                </li>

            </ul>

        </div>

    </nav>

</template>


<script setup>

const navLinks = [

    {
        name: "Home",
        path: "/"
    },

    {
        name: "Images",
        path: "/images"
    },

    {
        name: "Accordion",
        path: "/accordion"
    },

    {
        name: "Grid",
        path: "/grid"
    }

];

</script>