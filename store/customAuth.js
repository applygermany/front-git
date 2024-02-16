// create store
export const state = () => ({
  mobileRecovery: "",
  code: "",
  verification: {
    mobile: null,
    first4: null,
    last4: null,
    hiddenEmail: null,
  },
});

// getters
export const getters = {
  mobileRecovery(state) {
    return state.mobileRecovery;
  },
  code(state) {
    return state.code;
  },
  verification(state) {
    return state.verification;
  },
};

// mutations
export const mutations = {
  Set_MobileRecovery(state, payload) {
    state.mobileRecovery = payload;
  },
  Set_CodeRecovery(state, payload) {
    state.code = payload;
  },

  Set_Verification(state, payload) {
    state.verification = payload;
  },
};

// actions
export const actions = {
  async signIn({ commit }, payload) {
    const { data: response } = await this.$axios.post("v1/signIn", payload);
    if (response.status === 1) {
      const { data } = await this.$auth.loginWith("local", {
        data: {
          mobile: payload.mobile,
          password: payload.password,
        },
      });

      if (data.level === 1) this.$router.push("/user/dashboard");
      else if (data.level === 6) this.$router.push("/writer/dashboard");
      else if (data.level === 7) this.$router.push("/expert/telSupports");
      else this.$router.push("/expert/dashboard");
    }

    const error = new Error(response.msg);
    throw error;
  },

  async sendRecoveryCode({ commit }, payload) {
    const { data } = await this.$axios.post("v1/sendRecoveryCode", {
      mobileRecovery: payload,
    });

    commit("Set_MobileRecovery", payload);

    const error = new Error(data.msg);
    throw error;
  },

  async verifyRecoveryCode({ commit }, payload) {
    const { data } = await this.$axios.post("v1/verifyRecoveryCode", {
      mobile: payload.mobile,
      code: payload.code,
    });

    commit("Set_MobileRecovery", payload.mobile);
    commit("Set_CodeRecovery", payload.code);

    const error = new Error(data.msg);
    throw error;
  },
  async verify({ commit }, payload) {
    const { data } = await this.$axios.post("v1/verify", {
      mobile: payload.mobile,
      code: payload.code,
    });

    commit("Set_MobileRecovery", payload.mobile);
    commit("Set_CodeRecovery", payload.code);

    const error = new Error(data.msg);
    throw error;
  },
  async resendCode({ commit }, payload) {
    const { data } = await this.$axios.post("v1/resendCode", {
      mobile: payload,
    });

    commit("Set_MobileRecovery", payload);

    const error = new Error(data.msg);
    throw error;
  },
  async signUp({ commit }, payload) {
    const { data } = await this.$axios.post("v1/signUp", payload);

    commit("Set_MobileRecovery", payload.mobile);

    const error = new Error(data.msg);
    throw error;
  },
  async completeSignUp({ commit }, payload) {
    const { data: complete } = await this.$axios.post(
      "v1/completeSignUp",
      payload
    );
    if (complete.status == 1) {
      const { data } = await this.$auth.loginWith("local", {
        data: {
          mobile: payload.mobile,
          password: payload.password,
        },
      });
      commit("Set_MobileRecovery", payload.mobile);

      const error = new Error(data.msg);
      throw error;
    }
  },
  async recoverPassword({ commit }, payload) {
    const { data } = await this.$axios.post("v1/recoverPassword", payload);

    const error = new Error(data.msg);
    throw error;
  },

  setVerification({ commit }, payload) {
    commit("Set_Verification", payload);
  },
};
