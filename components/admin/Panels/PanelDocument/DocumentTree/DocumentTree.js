import React from "react";
import { useSelector } from "react-redux";
import { renderDocumentTree } from "../../../../../core/functions/render";



export default function DocumentTree() {

    const componentsData = useSelector(state => state.document.componentsData);
    const documentTree = renderDocumentTree(componentsData);

    return (
        <>
            {documentTree}
        </>
    )
}
