import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ButtonDropdownsExample() {
    return (
        <>
            <h1> Filter by </h1><br></br>
            <InputGroup className="mb-3">
                <DropdownButton
                    variant="outline-secondary"
                    title="Filter by Type"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" />
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                    variant="outline-secondary"
                    title="Filter by Price"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Type</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
            <InputGroup>
                <DropdownButton
                    variant="outline-secondary"
                    title="Filter by Location"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Price</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with 2 dropdown buttons" />
            </InputGroup><br></br>
            <InputGroup className="mb-3">
                <DropdownButton
                    variant="outline-secondary"
                    title="Filter by Age"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                    variant="outline-secondary"
                    title="Filter by Color"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Type</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
            <InputGroup>
                <DropdownButton
                    variant="outline-secondary"
                    title="Filter by Gender"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Price</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with 2 dropdown buttons" />
            </InputGroup>
            <br></br>
        </>
    );
}

export default ButtonDropdownsExample;