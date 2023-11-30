import { Button, Card, Checkbox, Col, Form, Input, Row, Space, Typography } from "antd"
import { Field, Formik } from "formik"
import { Label } from "recharts"

function newCustomers() {
    return (
        <div>
            <Typography.Title level={3}>Add New Data</Typography.Title>
            <Space >
                <Card>
                    <AddNewData />
                </Card>
            </Space>
        </div>
    )
}


function AddNewData() {
    return (
        <>
            <Formik>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                >
                    <div>
                        <Row>
                        
                            <div>
                                <Form.Item
                                    label="First Name"
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your first name!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                            </div>
                            <div>
                                <Form.Item
                                    label="Last Name"
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your last name!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>

                        </Row>

                        <Col>
                            <Form.Item
                                label="Phone Number"
                                name="phoneNumber"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your phone number !",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your email !",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your address !",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>


                    </div>
                </Form>
            </Formik>

        </>
    )
}

export default newCustomers
