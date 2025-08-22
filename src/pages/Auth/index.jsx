import { useMutation } from "@tanstack/react-query"
import { Button, Card, Form, Input, Typography } from "antd"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { AuthService } from "../../services/auth/auth.service"
import { useAuthStore } from "../../store/useAuthStore"

export const Auth = () => {
	const [form] = Form.useForm()

	const { setUser, user } = useAuthStore()

	const navigate = useNavigate()

	useEffect(() => {
		if (user) {
			navigate("/")
		}
	}, [user])

	const { mutate: login, isPending } = useMutation({
		mutationFn: AuthService.login,
	})

	function onFinish(values) {
		login(values, {
			onSuccess: (data) => {
				setUser(data)
			},
		})
	}
	return (
		<>
			<Card style={{ minWidth: "300px", maxWidth: "400px" }}>
				<Typography.Title level={3} style={{ textAlign: "center" }}>
					Войти в систему
				</Typography.Title>
				<Form name="auth-form" form={form} layout="vertical" autoComplete="off" onFinish={onFinish}>
					<Form.Item
						name={"phone"}
						label={"Телефон номер"}
						initialValue={"+998"}
						rules={[
							{ required: true, message: "Обязательно заполните" },
							{ min: 13, message: "минимум 13 цифр" },
							{ max: 13, message: "максимум 13 цифр" },
						]}
					>
						<Input placeholder="+998913809626" />
					</Form.Item>
					<Form.Item
						name={"password"}
						label={"Пароль"}
						rules={[
							{ required: true, message: "Заполните поля" },
							{ min: 5, message: "миниммум 5 символов" },
							{ max: 100, message: "максимум 100 символов" },
						]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item label={null}>
						<Button loading={isPending} type="primary" htmlType="submit" block>
							Войти
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</>
	)
}
