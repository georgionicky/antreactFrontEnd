import { Space, Table, Typography } from "antd"
import { useEffect, useState } from "react"
import { getOrders } from "../../API"

function Orders() {
    return <div>
        <Typography.Title level={3}>
            Orders
        </Typography.Title>
        <Space>
            <AllOrders />
        </Space>
    </div>
}
function AllOrders() {
    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getOrders().then(res => {
            setDataSource(res.products)
            setLoading(false)
        })
    }, [])
    return (
        <>
            <Typography.Text>Recent Orders</Typography.Text>
            <Table size={20}
                columns={
                    [
                        {
                            title: "Title",
                            dataIndex: "title",
                        },
                        {
                            title: "Price",
                            dataIndex: "price",
                            render: (value) => <span>${value}</span>
                        },
                        {
                            title: "Discounted Price",
                            dataIndex: "discountedPrice",
                            render: (value) => <span>${value}</span>
                        },
                        {
                            title: "Quantity",
                            dataIndex: "quantity",

                        },
                        {
                            title: "Total",
                            dataIndex: "total",
                        },

                    ]}
                loading={loading}
                dataSource={dataSource}
                pagination={{
                    pageSize: 5
                }}
            ></Table>
        </>
    )
}
export default Orders