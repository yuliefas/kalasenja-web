<template>
  <!-- start:main content -->
  <div class="main-content" id="page_login">
    <div class="row">
      <!-- <BackgroundLogin/> -->

      <div class="col-lg pad-right-0 align-self-center">
        <div class="block">
          <div class="block__header">
            <h4>Log In</h4>
            
            <p v-if="validation.global" class="validation-error">{{validation.global}}</p>
          </div>
          <div class="block__body">
            <form v-on:submit.prevent="login">
              <div class="form-group">
                <label>privyId Address</label>
                <input
                  v-model="privyId"
                  type="privyId"
                  autocomplete="off"
                  class="form-control"
                  placeholder="Type your privyId"
                  required
                >
                <!-- <p class="validation-error">{{validation.privyId[0]}}</p> -->
              </div>
              <div class="form-group margin-top-2">
                <label>Password</label>
                <input
                  v-model="password"
                  autocomplete="off"
                  type="password"
                  class="form-control"
                  placeholder="Type your password"
                  required
                >
                <!-- <p class="validation-error" v-for="(item, index) in validation.password" :key="index">{{item}}</p> -->
              </div>
              <div class="form-group margin-top-3">
                <button type="submit" class="btn btn--primary btn-block">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end:/main content -->
</template>

<script>
import { mapState } from 'vuex';
// import BackgroundLogin from './components/BackgroundLogin.vue';

export default {
  name: 'login',
  data: function() {
    return {
      privyId: '',
      password: '',

      validation: {
        global: null,
        privyId: [],
        password: []
      }
    };
  },
  computed: {
    ...mapState('global', {
      error422: state => state.error422
    }),
    ...mapState('auth', {
      userLogin: state => state.userLogin,
      loginValidation: state => state.loginValidation,
    })
  },
  watch: {
    error422: function(val) {
      if (val) {
        this.$swal({
          type: 'warning',
          title: 'Opps...',
          text: 'privyId or Password Something went wrong!'
        });
      }
    },
    userLogin: function(val) {
      alert(val);
      if (val) {
        // this.$store.dispatch('users/getDetail', val.id);
        return this.$router.push({ name: 'admin-module' });
      }
    },
    loginValidation: function(val) {
      if (val) {
        this.validation.global = 'You have entered an invalid username and/or password';
      } else {
        this.validation.global = null;
      }
    }
  },
  methods: {
    login: async function() {
      this.$store.dispatch('auth/login', {
        body: {
          privy_id: this.privyId,
          password: this.password,
        }
      });
    }
  },
  components: {
    // BackgroundLogin
  }
};
</script>