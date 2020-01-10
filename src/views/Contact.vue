<template>
  <v-row style="height: 100%;" justify="center" align="center">
    <v-col cols="12">
      <v-card
        :class="{'ma-0': $vuetify.breakpoint.smAndDown, 'ma-12': $vuetify.breakpoint.mdAndUp}"
        outlined
      >
        <v-row>
          <v-col cols="12" md="6">
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" class="px-4">
                    <h2>Contact Us</h2>
                    <v-text-field
                      class="my-6"
                      clearable
                      v-model="firstname"
                      label="First Name"
                      aria-required
                      :rules="[v => !!v || 'Name is required']"
                    ></v-text-field>
                    <v-text-field
                      class="my-6"
                      clearable
                      v-model="lastname"
                      label="Last Name"
                      aria-required
                      :rules="[v => !!v || 'Last Name is required']"
                    ></v-text-field>
                    <v-text-field
                      class="my-6"
                      error-count="3"
                      clearable
                      type="email"
                      v-model="email"
                      label="E-mail"
                      aria-required
                      :rules="emailRules"
                    ></v-text-field>
                    <v-textarea
                      type="subject"
                      v-model="subject"
                      label="Subject"
                      aria-required
                      :rules="[v => !!v || 'Subject is required']"
                    ></v-textarea>
                    <v-btn
                      @click="loader = 'loading', alert = !alert, clearAll()"
                      :disabled="!valid"
                      :loading="loading"
                      color="success"
                    >Send the Message</v-btn>
                    <v-alert
                      :value="alert"
                      color="success"
                      dark
                      border="right"
                      icon="mdi-send"
                      transition="scale-transition"
                      class="my-2"
                      dismissible
                    >Your Message has been sent</v-alert>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              aspect-ratio="1.77"
              height="100%"
              src="@/assets/img/contact/contact.jpg"
              lazy-src="@/assets/img/contact/contact.jpg"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    loader: null,
    loading: false,
    alert: false,
    show1: false,
    firstname: null,
    lastname: null,
    password: null,
    email: null,
    subject: null,
    email_confirm: null,
    valid: true,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    clearAll: function () {
      this.firstname = "",
      this.lastname = "",
      this.password = "",
      this.email = "",
      this.subject = ""
    }
  },
  computed: {
    emailConfirmationRules () {
      return [
        () => this.email_confirm === this.email || 'E-mail must match',
        v => !!v || 'Confirmation E-mail is required'
      ];
    }
  },
  watch: {
    loader () {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  }
}
</script>