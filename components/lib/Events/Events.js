import React, { useEffect } from 'react'
import { getComponent } from '../../../core/functions/common/components';
import { filterData, groupFilters } from '../../../core/functions/common/filters';
import EventCard from './EventCard/EventCard';
import { EventsComponent } from './EventsStyled';
import ShowCard from './ShowCard/ShowCard';
import Shows from './Shows/Shows';



export default function Events(props) {

    const {state} = props;
    const {filters, data} = state;
    const {componentsData} = state.document;
    const id = props.componentData.id;
    const componentData = getComponent(componentsData, id);

    const currentFilters = groupFilters(filters);
    const filteredData = filterData(data, currentFilters);

    const filteredEvents = filteredData.events;
    const filteredShows = filteredData.shows;

    useEffect(() => {
        const onBeforeUnload = () => {
            sessionStorage.setItem('filters', filters);
        };
        window.addEventListener('beforeunload', onBeforeUnload);
        return () => window.removeEventListener('beforeunload', onBeforeUnload);
    }, [filters])


    return (
        <EventsComponent
            id={id}
            componentData={componentData}
        >
            <div style={{padding: '5px 50px'}}><h3>Events</h3></div>
            <div style={{display: 'inline-flex', flexWrap: 'wrap', paddingLeft: '15px'}}>
                {filteredEvents && filteredEvents.map(event => {
                    return (
                        <EventCard key={event.id} event={event} />
                    );
                })}
            </div>

            <Shows>
                <div style={{padding: '5px 50px'}}><h3>Shows</h3></div>
                <div style={{display: 'inline-flex', flexWrap: 'wrap', paddingLeft: '25px', paddingRight: '25px'}}>
                    {filteredShows && filteredShows.map(show => {
                        return (
                            <ShowCard key={show.id} show={show} />
                        );
                    })}
                </div>
            </Shows>
        </EventsComponent>
    )
}
