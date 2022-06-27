import { ListGroup, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function List({ list }) {
    const copyLink = (e) => {
        const { link } = e.target.dataset;
        const clipboard = navigator.clipboard;
        clipboard.writeText(link).then(() => {
            e.target.innerText = 'Copied';
            setTimeout(() => {
                e.target.innerText = 'Copy';
            }, 2000);
        });
    };

    return (
        <ListGroup>
            {list.map((item) => (
                <ListGroup.Item key={uuidv4()}>
                    <span>{item.link}</span>
                    <span>
                        <a
                            href={item.short_link}
                            style={{ padding: '0 0.5em' }}
                        >
                            {item.short_link}{' '}
                        </a>
                        <Button data-link={item.short_link} onClick={copyLink}>
                            Copy
                        </Button>
                    </span>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default List;
