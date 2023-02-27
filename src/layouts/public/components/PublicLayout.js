import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../../navigation/Routes";
import { CustomHeader } from "../../../shared/components";

const PublicLayout = ({handleLogin}) => {
    return (
        <Layout>
            <Header style={{ backgroundColor: '#E7E45E', padding: 0, borderBottom: "1px solid black" }}>
                <CustomHeader />
            </Header>
            <Content>
                <Routes>
                    {publicRoutes.map((item, index) => (
                        (item.path==='/login')?<Route exact key={index} path={item.path} element={React.createElement(item.component,{handleLogin})} />:
                        <Route key={index} path={item.path} element={<item.component/>} />
                    ))}
                </Routes>
            </Content>
        </Layout>
    );
};

export default PublicLayout;
