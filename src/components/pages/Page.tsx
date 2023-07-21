import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";


type PropsType = {
    pages: Array<PagesType>
}

const Page = (props: PropsType) => {
    const params = useParams()
    const element = Number(params.id)

    return (
        <div>
            <div>{props.pages[element].heading}</div> //TBD
            <div>{props.pages[element].about}</div>  //TBD
        </div>
    );
};

export default Page;
