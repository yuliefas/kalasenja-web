<template>
  <div>
    <!-- start:header -->
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="index.html">Pretest</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Category</a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Profile
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a v-on:click="logout" class="dropdown-item">Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- end:/header -->
    
    <div class="content">
      <div class="row justify-content-md-center">
        <div class="col-sm-8">

          <div class="float-right margin-bottom-2">
            <a href="#" class="btn btn-primary">Add Product</a>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Ingredient</th>
                <th scope="col">Measurement</th>
                <th scope="col">cm</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in product.data" :key="item.id">
                <th scope="row">{{ item.name }}</th>
                <td>{{ item.description }}</td>
                <td>{{ item.ingredient }}</td>
                <td>{{ item.measurement }}</td>
                <td>{{ item.cm }}</td>
                <td>
                  <a href="edit.html" class="btn btn-secondary">edit</a>
                  <button class="btn btn-danger">delete</button>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- start: pagination -->
          <!-- <Pagination
            :page="page"
            :goto-page="gotoPage"
            :total-rows="allProduct.meta.pagination"
            :limit="allProduct.meta.pagination"
          ></Pagination> -->
          <!-- end:/ pagination -->

          <!-- start: Pagination-->
          <nav class="float-right">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <!-- end:/ Pagination-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  data: function() {
    return {
      allProduct: {},
    }
  },
  computed: {
    ...mapState('product', {
      product: state => state.product
    })
  },
  watch: {
    product: function(val) {
      this.allProduct.meta.pagination = val.meta.pagination;
    }
  },
  created: function() {
    this.getProducts();
  },
  methods: {
    getProducts: function(page = this.page, limit = this.limit) {
      this.page = page;
      this.limit = limit;
      this.$store.dispatch('product/getAll', {
        params: {}
      });
    },
    gotoPage: function(page, limit) {
      this.getProducts(page, limit);
    },
    logout: function() {
      this.$store.dispatch('auth/logout');
      return this.$router.push({ name: 'auth-login' });
    }
  }
}
</script>