import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        events = events.map((item) => {
            return new Event(item.second, item.type, item.message);
        });
        return new EventManager(events, types);
    }
};