import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collections-overview/Collections-overview.component.jsx";
import CategoryPage from "../catergory/Category.component.jsx";


const ShopPage = ({ match }) =>  (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={<CollectionOverview/>}/>
        <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
    </div>
)



export default ShopPage