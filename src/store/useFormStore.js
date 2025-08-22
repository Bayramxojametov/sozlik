import { create } from "zustand"

export const useFormStore = create((set) => ({
	isOpenForm: false,
	formData: null,
	setFormData: (data) => {
		set({ formData: data, isOpenForm: true })
	},
	resetFormData: () => set({ formData: null, isOpenForm: false }),
	toggleForm: () => set((state) => ({ formData: null, isOpenForm: !state.isOpenForm })),
}))

export const isFormValidate = (params) => {
	if (params === null || typeof params !== "object") return false
	const requiredKeys = Object.keys(params)
	return requiredKeys.every((key) => key in params)
}
