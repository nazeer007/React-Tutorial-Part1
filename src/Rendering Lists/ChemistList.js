import { people } from "./data"

export default function ChemistList() {
    const chemist = people.filter(person => 
        person.profession === 'chemist'
    );

    const listItems = chemist.map(person => 
        <li>
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>
}