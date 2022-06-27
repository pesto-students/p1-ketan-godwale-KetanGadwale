import { ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function List({ list }) {
    return (
        <ListGroup>
            {list.map((item) => (
                <ListGroup.Item key={uuidv4()}>
                    <span>{item.link}</span>
                    <span style={{ color: 'darkorange' }}>
                        {item.short_link}
                    </span>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default List;
