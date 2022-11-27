import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const [blocks, setBlocks]= useState([]) /* starts with no blocks?
    /* Use the map() function to render multiple Blocks! */
    const handleClick = (block) => {
        setBlocks([block,...blocks])

    }

    const posts = blocks.map((block) => (
        <li> <Block color={block}></Block> </li>
    ));

    return (
        <div>
            <Menu handleClick={handleClick}></Menu>
            { posts }
        </div>
    );
}

export default Feed;
