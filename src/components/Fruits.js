import React from "react";
import ReactPlayer from 'react-player';

function Fruits(props) {
    const [fruits] = React.useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
    ]);

    return (
        <div>
            HI !
            {/* {props.fruits.map(f => <p key={f.id}>{f.id} {f.fruitName}</p>)} */}
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </div>
    );
};

export default Fruits;
