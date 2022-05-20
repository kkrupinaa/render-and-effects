import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState(-1);
    useEffect(() => {
        function mycall(message: number) {
            setMessage(message);
        }
        setMessage(-1);
        subscribe(props.sourceId, mycall);
        return () => {
            unsubscribe(props.sourceId, mycall);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
