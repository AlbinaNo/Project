// import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

const BASE_URL = process.env.REACT_APP_API_URL

export const registration = (email, password) => {
  return fetch(`${BASE_URL}/api/user/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      try {
        if (res.status === 201 || res.status === 200) {
          return res.json();
        }

        if (res.status === 409) {
          return Promise.reject(
            new Error(`Пользователь с таким email уже существует`)
          );
        }
      } catch (err) {
        return err;
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
   /* localStorage.setItem('token', data.token)
    return jwt_decode(data.token) */
}

export const login = (email, password) => {
  return fetch(`${BASE_URL}/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }

        if (res.status === 400) {
          return Promise.reject(
            new Error(`Ошибка: ${res.status}: ${res.statusText}`)
          );
        }

        if (res.status === 401) {
          return Promise.reject(
            new Error(`Ошибка: ${res.status}: ${res.statusText}`)
          );
        }
      } catch (err) {
        return err;
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    })
    .then((data) => {
      try {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
        }
        return data;
      } catch (err) {
        return Promise.reject(err);
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
}

/*
export const check = async () => {
    const {data} = await $authHost.get('api/user/auth', ) 
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
} */
