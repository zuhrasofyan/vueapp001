<template>
  <section>
    <save-product-form
      :product="productInForm"
      @submit="onFormSave"
      v-on:cancel="resetProductInForm"
    ></save-product-form>
    <product-list
      :products="products"
      v-on:edit="onEditClicked"
      v-on:remove="onRemoveClicked"
      test="helow"
    ></product-list>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductList from './ProductList';
import SaveProductForm from './SaveProductForm';

const initialData = () => (
  {
    productInForm: {
      id: null,
      name: '',
      description: '',
      price: null,
    },
  }
);


export default {
  components: {
    ProductList,
    SaveProductForm,
  },
  data: initialData,
  computed: mapGetters({
    products: 'getProducts',
  }),
  methods: {
    ...mapActions([
      'saveProduct',
      'deleteProduct',
    ]),
    onFormSave(product) {
      // const index = this.products.findIndex(p => p.id === product.id);
      // // update product if it exists or create it if it doesn't
      // if (index !== -1) {
      //   // We need to replace the array entirely so that vue can recognize
      //   // the change and re-render entirely.
      //   // See http://vuejs.org/guide/list.html#Caveats
      //   this.products.splice(index, 1, product);
      // } else {
      //   product.id = uuid.v4(); // eslint-disable-line no-param-reassign
      //   this.products.push(product);
      // }
      this.saveProduct(product);

      this.resetProductInForm();
    },
    resetProductInForm() {
      this.productInForm = initialData().productInForm;
    },
    onEditClicked(product) {
      // since objects are passed by reference we need to clone the product
      // either by using Object.assign({}, product) or by using object
      // spread like we do here.
      this.productInForm = { ...product };
    },
    onRemoveClicked(productId) {
      // const index = this.products.findIndex(p => p.id === productId);
      // this.products.splice(index, 1);
      this.deleteProduct(productId);
      if (productId === this.productInForm.id) {
        this.resetProductInForm();
      }
    },
  },
};
</script>