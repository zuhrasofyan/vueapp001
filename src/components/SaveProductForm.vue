<template>
  <div class="product-form">
    <div class="column is-half">
      <b-field label="Product Name">
        <b-input type="text" v-model="product.name" id="productName" maxlength="32" placeholder="Enter Product Name"></b-input>
      </b-field>
      <b-field label="Product Description">
        <b-input type="textarea"
          v-model="product.description"
          id="productDescription" 
          minlength="10"
          maxlength="120"
          rows="3"
          placeholder="Enter Description">
        </b-input>
      </b-field>
      <b-field label="Price">
        <b-input type="number" v-model="product.price" id="price" placeholder="Enter Price"></b-input>
      </b-field>

      <!-- <div class="field">
        <label class="label" for="productName">Product Name</label>
        <div class="control">
          <input class="input" type="text" v-model="product.name" id="productName" maxlength="32" placeholder="Enter Product Name">
        </div>
      </div> -->

      <!-- <div class="field">
        <label class="label" for="productDescription">Product Description</label>
        <div class="control">
          <textarea class="textarea" v-model="product.description" id="productDescription" rows="3" maxlength="128" placeholder="Enter Description"></textarea>
        </div>
      </div> -->

      <!-- <div class="field">
        <label class="label" for="price">Price</label>
        <div class="control">
          <input class="input" type="number" v-model="product.price" id="price" placeholder="Enter Price">
        </div>
      </div> -->
      <div class="field">
        <div class="control">
          <button type="submit" @click.prevent="onSubmit" class="button is-primary">{{product.id ? 'Update' : 'Add'}} Product</button>
          <button type="submit" v-if="product.id" @click.prevent="onCancel" class="button">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    onSubmit() {
      this.$emit('submit', this.product);
    },
    onCancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style scoped>
.product-form {
  text-align: left;
}
</style>
