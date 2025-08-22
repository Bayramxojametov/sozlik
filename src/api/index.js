import axios from "axios"

const _API_KEY = "https://muxammed123.pythonanywhere.com/api/v1/admin"
/* const _API_KEY = "https://55280fadfb1ce421.mokky.dev" */
const $authHost = axios.create({
	baseURL: _API_KEY,
})

$authHost.interceptors.request.use((config) => {
	const token = localStorage.getItem("token")

	config.headers.Authorization = `Bearer ${token ?? ""}`

	return config
})

const $host = axios.create({
	baseURL: _API_KEY,
})

export { $host, $authHost }
