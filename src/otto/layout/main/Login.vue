<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9" />
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            
            <b-card-body class="px-lg-5 py-lg-5 mb-5">
              
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              name="Username"
                              :rules="{required: true, min: 4}"
                              prepend-icon="ni ni-email-83"
                              placeholder="Username"
                              v-model="model.username">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="Password"
                              v-model="model.password">
                  </base-input>

                  <b-form-checkbox v-model="model.rememberMe">Remember me</b-form-checkbox>
                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">Sign in</base-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        model: {
          username: '',
          password: '',
          rememberMe: false
        }
      };
    },
    methods: {
      onSubmit() {
        var username = this.model.username
        var passw = this.model.password

        if(username == "spadmin" && passw == "spadmin123"){
          this.$cookies.set('userType', 'spadmin')
          this.$cookies.set('isLogin', true)
          
          this.$router.push({name: "home"})
        } else if(username == "admin" && passw == "admin123"){
          this.$cookies.set('userType', 'admin')
          this.$cookies.set('isLogin', true)
        
          this.$router.push({name: "home"})
        } else if(username == "moderator" && passw == "moderator123"){
          this.$cookies.set('userType', 'moderators')
          this.$cookies.set('isLogin', true)
          
          this.$router.push({name: "home"})
        }  
      }
    },
    mounted() {
      var isLoginCookie = this.$cookies.get('isLogin')
      
      if(isLoginCookie == "true"){
        this.$router.push({name: "home"})
      }
    }
  };
</script>
