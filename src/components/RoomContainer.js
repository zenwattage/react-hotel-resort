import React from 'react';
import RoomFilter from './RoomFilter.js';
import RoomList from './RoomList';
import { withRoomConsumer } from '../Context';
import Loading from "./Loading";

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    // console.log(value);

    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer)

// import React from 'react';
// import RoomFilter from './RoomFilter.js';
// import RoomList from './RoomList';
// import { RoomConsumer } from '../Context';
// import Loading from "./Loading";



// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const { loading, sortedRooms, rooms } = value;

//                 if (loading) {
//                     return <Loading />;
//                 }
//                 console.log(value);

//                 return (
//                     <div>
//                         Hello from Rooms Container

//                     <RoomFilter rooms={rooms} />
//                         <RoomList rooms={sortedRooms} />
//                     </div>
//                 );
//             }}

//         </RoomConsumer>

//     );
// }
