import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function SelectSmall() {
    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    return (
        <div className='Filtering'>
            <h1> Filter By </h1>
            <FormControl sx={{ m: 1, minWidth: 150 }} >
                <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-select-small"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Golden Retriever</MenuItem>
                    <MenuItem value={20}>Labrador</MenuItem>
                    <MenuItem value={30}>Husky</MenuItem>
                    <MenuItem value={30}>Chihuahua</MenuItem>
                    <MenuItem value={30}>German Shepherd </MenuItem>
                    <MenuItem value={30}>Bulldog</MenuItem>
                    <MenuItem value={30}>Pitbull</MenuItem>
                    <MenuItem value={30}>Poodle</MenuItem>
                    <MenuItem value={30}>Beagle</MenuItem>
                    <MenuItem value={30}>Boxer</MenuItem>
                    <MenuItem value={30}>Dachshund</MenuItem>
                    <MenuItem value={30}>Rotweiler</MenuItem>
                    <MenuItem value={30}>Doberman</MenuItem>
                    <MenuItem value={30}>Australian Terrier</MenuItem>
                    <MenuItem value={30}>Affenpinscher</MenuItem>
                </Select>
            </FormControl><br></br>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-select-small"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>1-3 months</MenuItem>
                    <MenuItem value={20}>4-6 months</MenuItem>
                    <MenuItem value={30}>7-9 months</MenuItem>
                    <MenuItem value={30}>10-12 months</MenuItem>
                    <MenuItem value={30}>1+ years</MenuItem>
                    <MenuItem value={30}>2+ years</MenuItem>
                </Select>
            </FormControl> <br></br>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Size</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-select-small"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Small (0.5kg to 10kg) </MenuItem>
                    <MenuItem value={10}>Medium (10kg to 25kg) </MenuItem>
                    <MenuItem value={10}>Large (25kg to 40kg) </MenuItem>
                    <MenuItem value={10}>Extra-Large (40kg to 90kg) </MenuItem>
                </Select>
            </FormControl><br></br>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Gender</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-select-small"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                </Select>
            </FormControl><br></br>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Color</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-select-small"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>White</MenuItem>
                    <MenuItem value={20}>Black</MenuItem>
                    <MenuItem value={30}>Brown</MenuItem>
                    <MenuItem value={20}>Tan</MenuItem>
                    <MenuItem value={20}>Cream</MenuItem>
                    <MenuItem value={20}>Gray</MenuItem>
                    <MenuItem value={20}>Bi-Colors</MenuItem>
                    <MenuItem value={20}>Tri-Colors</MenuItem>

                </Select>
            </FormControl><br></br>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Price</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-select-small"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>10-40</MenuItem>
                    <MenuItem value={20}>50-90</MenuItem>
                    <MenuItem value={30}>100-150</MenuItem>
                    <MenuItem value={30}>150-200</MenuItem>
                    <MenuItem value={30}>200+</MenuItem>
                </Select>
            </FormControl><br></br>
            <FormControl sx={{ m: 1, minWidth: 150 }} >
                <InputLabel id="demo-simple-select-autowidth-label">Location</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-select-small"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Tripoli</MenuItem>
                    <MenuItem value={20}>Beirut</MenuItem>
                    <MenuItem value={30}>Akkar</MenuItem>
                    <MenuItem value={30}>Bekaa</MenuItem>
                    <MenuItem value={30}>Koura</MenuItem>
                    <MenuItem value={30}>Saida</MenuItem>
                    <MenuItem value={30}>Tyre</MenuItem>
                    <MenuItem value={30}>Bekaa</MenuItem>
                </Select>
            </FormControl><br></br>
            <FormControl sx={{ m: 1, minWidth: 150 }} className='FormControl' >
                <InputLabel id="demo-simple-select-autowidth-label">Name</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-select-small"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Max</MenuItem>
                    <MenuItem value={20}>Bella</MenuItem>
                    <MenuItem value={30}>Charlie</MenuItem>
                    <MenuItem value={30}>Lucie</MenuItem>
                    <MenuItem value={30}>Cooper</MenuItem>
                    <MenuItem value={30}>Daisy</MenuItem>
                    <MenuItem value={30}>Luna</MenuItem>
                    <MenuItem value={30}>Rocky</MenuItem>
                    <MenuItem value={30}>Sadie</MenuItem>
                    <MenuItem value={30}>Buddy</MenuItem>
                </Select>
                <div style={{marginTop: 10}}>
                <Button variant="outlined"> Search </Button>
                </div>
            </FormControl>
        </div>

    );
}