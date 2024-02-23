import instance from '../../config/axios';

export async function login(loginData) {
  try {
    const res = await instance.post('/api/auth/login', loginData);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function register(registerData) {
  try {
    const res = await instance.post('/api/auth/register', registerData);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function me() {
  try {
    const res = await instance.get('/api/auth/me');
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function forgotPassword(forgotPasswordData) {
  try {
    const res = await instance.post(
      '/api/auth/forgot-password',
      forgotPasswordData
    );
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function verifyOTP(verifyOTPData) {
  try {
    const res = await instance.post('/api/auth/verify-otp', verifyOTPData);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function resetPassword(resetPasswordData, token) {
  try {
    const res = await instance.post(
      `/api/auth/reset-password/${token}`,
      resetPasswordData
    );
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
