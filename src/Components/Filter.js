import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    return (
        <div className='Filtering'>
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
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select><br></br>
                <button> Search </button>
            </FormControl>
        </div>

    );
}