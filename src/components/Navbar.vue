<template>
    <!-- Main container -->
    <nav class="level">
        <!-- Left side -->
        <div class="level-left">
            <div class="level-item">
            <p class="subtitle is-5">
                <strong>123</strong> posts
            </p>
            </div>
            <div class="level-item">
            <div class="field has-addons">
                <p class="control">
                <input class="input" type="text" placeholder="Find a post">
                </p>
                <p class="control">
                <button class="button">
                    Search
                </button>
                </p>
            </div>
            </div>
        </div>

        <!-- Right side -->
        <div class="level-right">
            <p class="level-item"><strong><router-link to="/" exact>Home</router-link></strong></p>
            <p class="level-item"><strong><router-link to="/about">About</router-link></strong></p>
            <p class="level-item"><strong><router-link to="/product">Product</router-link></strong></p>
            <p class="level-item"><strong><router-link to="/coins/ethereum">Ethereum</router-link></strong></p>
            <p class="level-item"><strong><router-link to="/coins/bitcoin">Bitcoin</router-link></strong></p>
            <p class="level-item"><a class="button is-success">New</a></p>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
.router-link-active {
  border:2px solid red;
}
/* nav {
    position: fixed !important;
    padding-top: 7px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: white;
} */
</style>


