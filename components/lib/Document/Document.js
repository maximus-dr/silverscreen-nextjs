import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { updateComponentIds } from '../../../core/functions/admin/components';
import { addComponent, addComponentToActive, deleteComponent, setComponentToBuffer, unsetActiveComponent } from '../../../store/actions/document';



export default function Document(props) {

    const activeComponent = useSelector(state => state.document.activeComponent);
    const bufferedComponent = useSelector(state => state.document.buffer);
    const dispatch = useDispatch();



    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset,
          width: box.width,
          height: box.height
        };
      }

    const [coords, setCoords] = useState();

    // useEffect(() => {
    //     console.log('effect');
    //     if (document && activeComponent && activeComponent.id) {
    //         const el = document.getElementById(activeComponent.id);
    //         const docEl = document.getElementById('doc001');
    //         const elCoords = getCoords(el);
    //         const docElCoords = getCoords(docEl);
    //         const coords = {
    //             ...elCoords,
    //             left: elCoords.left - docElCoords.left,
    //             top: elCoords.top - docElCoords.top
    //         }
    //         setCoords(coords);
    //     }
    //     if (!activeComponent) {
    //         setCoords(null);
    //     }
    // }, [activeComponent]);


    return (
        <div id='doc001' style={{position: 'relative'}}>
            {coords &&
            <div style={{width: `${coords.width}px`, height: `${coords.height}px`, position: 'absolute', top: `${coords.top}px`, left: `${coords.left}px`, pointerEvents: 'none', zIndex: '2', outline: '2px solid #42a5f5',
            outlineOffset: '1px'}}></div>}
            {props.children}
        </div>
    )
}
