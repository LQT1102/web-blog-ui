import React from "react";
import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SiteLayout from "./layouts/siteLayout/SiteLayout";
import loadable from "./utils/loadable";
import "./assets/fonts/font.css";
import TagsPage from "./pages/TagsPage/TagsPage";
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail";

const DemoPage = loadable(() => import("./pages/DemoPage"));
const HomePage = loadable(() => import("./pages/HomePage/HomePage"));

function App() {
    return (
        <React.Fragment>
            <Helmet
                titleTemplate="React.js Boilerplate"
                defaultTitle="React.js Boilerplate"
            >
                <meta
                    name="description"
                    content="A React.js Boilerplate application"
                />
            </Helmet>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route path="demo" element={<DemoPage />} />
                    <Route path="tags" element={<TagsPage />} />
                    <Route path="about" element={<></>} />
                    <Route path=":postId" element={<ArticleDetail />} />
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </React.Fragment>
    );
}

export default App;
