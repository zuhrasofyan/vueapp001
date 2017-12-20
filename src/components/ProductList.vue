<template>
  <div>
    <table class="table table-hover product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" track-by="id" @click.prevent="onEdit(product)">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}: -</td>
          <td><a href="#" @click.prevent.stop="onRemove(product.id)">Remove</a></td>
        </tr>
      </tbody>
    </table>
    <span>{{ test }}</span>
  </div>
</template>

<script>
export default {
  props: ['products', 'test'],
  methods: {
    onEdit(product) {
      this.$emit('edit', product);
    },
    onRemove(productId) {
      this.$emit('remove', productId);
    },
  },
};
</script>

<style scoped>
.header {
    font-size: 4rem;
}
</style>


