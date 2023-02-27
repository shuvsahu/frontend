import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "../../../navigation/Routes";
import { CustomHeader } from "../../../shared/components";

const PrivateLayout = ({handleLogout}) => {
    return (
        <Layout>
            <Header style={{backgroundColor: '#E7E45E',padding:0,borderBottom:"1px solid black"}}>
                <CustomHeader />
            </Header>
            <Content>
                <Routes>
                    {privateRoutes.map((item, index) => (
                        <Route handleLogout={handleLogout} exact key={index} path={item.path} element={item.component} />
                    ))}
                </Routes>
            </Content>
        </Layout>
    );
};

export default PrivateLayout;



/*//////Check back later/// <Route path="/" children={<Menu />} /> */