import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const withRouter = (Component) => {
    const Wrapper = () => {
        const navigate = useNavigate()
        const params = useParams()
        
        return <Component navigate={navigate} params={params} />
    }
    return Wrapper;
}