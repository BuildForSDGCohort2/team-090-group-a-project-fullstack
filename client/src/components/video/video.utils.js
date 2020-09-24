import Peer from 'simple-peer';
import { turnServer } from '../../config';

export async function getDisplayStream(){
    return navigator.mediaDevices.getDisplayMedia();
}

export class VideoCall {
    peer = null 
    init = (stream, initiator) => {
        this.peer = new Peer({
            initiator: initiator,
            stream: stream,
            trickle: false,
            reconnectTimer: 1000,
            iceTransportPolicy: 'relay',
            config: { iceServers: [{ url: turnServer }] }
        })
        return this.peer
    }
    connect = (otherId) => {
        this.peer.signal(otherId)
    }  
} 