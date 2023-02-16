<template>
  <div class="login">
    <v-row>
      <v-col
        lg="7"
        class="login__left"
      >
        <img
          src="@/assets/images/auth/login.svg"
          alt="Login Image"
          class="left-img"
        >
      </v-col>
      <v-col
        lg="5"
        class="login__right"
      >
        <div class="right-form">
          <validation-observer
            ref="form"
            v-slot="{ invalid }"
          >
            <h2 class="auth-title mb-4">
              Log In
            </h2>
            <form @submit.prevent="onLogin">
              <validation-provider
                v-slot="{ errors }"
                class="right-form__email"
                rules="required|email"
              >
                <v-text-field
                  v-model="formData.email"
                  label="Email"
                  :error-messages="errors"
                  placeholder="john@example.com"
                  outlined
                  required
                />
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                class="right-form__password"
                rules="required"
              >
                <a href="#">Forgot Password?</a>
                <v-text-field
                  v-model="formData.password"
                  label="Password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  :error-messages="errors"
                  placeholder="john@example.com"
                  outlined
                  required
                  @click:append="showPassword = !showPassword"
                />
              </validation-provider>

              <v-btn
                color="primary"
                type="submit"
                :disabled="invalid"
                :loading="isLoading"
                block
                large
              >
                Log In
              </v-btn>
            </form>
          </validation-observer>
        </div>
        <div class="right-signup">
          <p>
            Don't have an account?
            <a>Create yours now.</a>
          </p>
          <p>
            Have a question or need help?<br>
            Contact us: <a href="mailto:support@tracebit.net">support@tracebit.net</a>
          </p>
          <p>
            <a>Privacy policy</a>
            and
            <a>Terms and Conditions</a>
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

import { useAuthStore } from '@/store/auth'

export default {
  name: 'LoginPage',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  setup() {
    const authStore = useAuthStore()

    const formData = ref({
      email: '',
      password: ''
    })
    const showPassword = ref(false)
    const isLoading = ref(false)

    const onLogin = () => {
      authStore.login({
        data: formData.value,
        preload: (loading) => {
          isLoading.value = loading
        }
      })
    }

    return {
      formData,
      isLoading,
      showPassword,
      onLogin
    }
  }
}
</script>

<style lang="scss">
  @import './styles.scss';
</style>
