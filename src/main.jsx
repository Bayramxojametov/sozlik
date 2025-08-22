import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { App as AntdApp, ConfigProvider } from "antd"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import App from "./App.jsx"
import "./assets/style/index.css"
import '@ant-design/v5-patch-for-react-19';
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			staleTime: 0,
		},
	},
})

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ConfigProvider>
					<AntdApp>
						<App />
					</AntdApp>
				</ConfigProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>
)
