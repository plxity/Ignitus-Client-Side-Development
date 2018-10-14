

import axios from 'axios';
import * as t from './constants';

export function getTestimonialData() {
  return axios.get(t.TESTIMONIAL_URL);
}

export function signUp(email, password){
	return axios.post(t.STUDENT_SIGN_UP, { email: email, password: password})
}

export function signIn(email, password){
	return axios.post(t.STUDENT_SIGN_IN, { email: email, password: password})
}
