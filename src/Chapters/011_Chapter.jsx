import React, { useCallback, useState, memo } from 'react';

const ItemWhichIsNotEnought = ({ item, onClick }) => {
    const { name } = item;
    console.log(`render ${name}`);
    return <div onClick={() => onClick(item)}>Rendered Item {name}</div>;
};
const Item = memo(({ item, onClick }) => {
    const { name } = item;
    console.log(`render ${name}`);
    return <div onClick={() => onClick(item)}>Rendered Item {name}</div>;
});

const List = ({ items }) => {
    const [trigger, setTrigger] = useState();
    const onItemClick = useCallback((item) => {
        console.log(`clicked item with id ${item.id}`);
    }, []);

    const rerender = () => {
        setTrigger({});
    };

    console.log('####### RENDERED   List#######');
    return (
        <>
            <p>
                <button onClick={rerender}>RERENDER</button>
            </p>
            <p>
                {items.map((item) => (
                    <Item item={item} key={item.id} onClick={onItemClick} />
                ))}
            </p>
        </>
    );
};

const items = [
    { id: '1', name: 'First' },
    { id: '2', name: 'Secons' },
    { id: '3', name: 'Third' },
];

export const Chapter011 = () => {
    return <List items={items} />;
};
