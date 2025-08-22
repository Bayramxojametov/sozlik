import { Table } from "antd"
import { useGetAllWords } from "../../services/words/words.api"
import { useWordsColumns } from "./useWordsColumns"

export const WordsTable = () => {
	const { data, isLoading } = useGetAllWords()
	const columns = useWordsColumns()

	return <Table rowKey={(record) => record.id} loading={isLoading} dataSource={data?.data || []} columns={columns} bordered />
}
