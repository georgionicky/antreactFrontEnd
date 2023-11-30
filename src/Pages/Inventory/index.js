import { Avatar, Rate, Space, Table, Typography } from "antd"
import { useEffect, useState } from "react"
import { getInventory } from "../../API"

function Inventory() {
    return <div>
        <Typography.Title level={3}>
            Inventory
        </Typography.Title>
        <Space direction="vertical">
            <AllProducts />
        </Space>
    </div>
}

function AllProducts() {
    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getInventory().then(res => {
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
                            title: "Thumbnail",
                            dataIndex: "thumbnail",
                            render: (link) => {
                                return <Avatar src={link} size={75} />
                            }
                        },
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
                            title: "Rating",
                            dataIndex: "rating",
                            render: (rating) => {
                                return <Rate value={rating} allowHalf disabled />
                            }
                        },
                        {
                            title: "Stock",
                            dataIndex: "stock",
                        },
                        {
                            title: "Brand",
                            dataIndex: "brand",
                        },
                        {
                            title: "Category",
                            dataIndex: "category",
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
export default Inventory