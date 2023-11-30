import {
    Avatar,
    Button,
    Col,
    FloatButton,
    Row,
    Space,
    Table,
    Typography,
} from "antd"
import { getUsers } from "../../API"
import { useEffect, useState } from "react"
import { UserAddOutlined } from "@ant-design/icons"

function Customers() {
    return (
        <div>
            <Typography.Title level={3}>Customers</Typography.Title>
            <Space>
                <AllUsers />
            </Space>
        </div>
    )
}
function AllUsers() {
    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getUsers().then((res) => {
            setDataSource(res.users)
            setLoading(false)
        })
    }, [])
    return (
        <>
            <Row justify="end">
                <Col>
                    <Button href="/newCustomers" type="primary" icon={<UserAddOutlined />} style={{ marginBottom: '10px' }}>
                        Add New
                    </Button>
                </Col>
            </Row>
            <Table
                size={20}
                columns={[
                    {
                        title: "Photo",
                        dataIndex: "image",
                        render: (link) => {
                            return <Avatar src={link} size={75} />
                        },
                    },
                    {
                        title: "Full Name",
                        render: (record) => (
                            <span>{`${record.firstName} ${record.lastName}`}</span>
                        ),
                    },
                    {
                        title: "Email",
                        dataIndex: "email",
                    },
                    {
                        title: "Phone Number",
                        dataIndex: "phone",
                    },
                    {
                        title: "address",
                        dataIndex: "address",
                        render: (address) => {
                            return (
                                <span>
                                    {address.address}, {address.city}
                                </span>
                            )
                        },
                    },
                ]}
                loading={loading}
                dataSource={dataSource}
                pagination={{
                    pageSize: 5,
                }}
            ></Table>
        </>
    )
}
export default Customers
