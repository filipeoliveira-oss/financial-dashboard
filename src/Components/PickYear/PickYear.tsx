import './Pickyear.css'
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export default function PickYear(props:{ setSelectedYear: Function}){

    return(
        <div className='pickyearContainer'>
            <ToggleGroup.Root
                className="ToggleGroup"
                type="single"
                defaultValue="2024"
                aria-label="Select Year"
            >
                <ToggleGroup.Item className="ToggleGroupItem" value="2021" aria-label="year 2021" onClick={() =>{props.setSelectedYear('2021')}}>
                    2021
                </ToggleGroup.Item>
                <ToggleGroup.Item className="ToggleGroupItem" value="2022" aria-label="year 2022" onClick={() =>{props.setSelectedYear('2022')}}>
                    2022
                </ToggleGroup.Item>
                <ToggleGroup.Item className="ToggleGroupItem" value="2023" aria-label="year 2023" onClick={() =>{props.setSelectedYear('2023')}}>
                    2023
                </ToggleGroup.Item>
                <ToggleGroup.Item className="ToggleGroupItem" value="2024" aria-label="year 2024" onClick={() =>{props.setSelectedYear('2024')}}>
                    2024
                </ToggleGroup.Item>
            </ToggleGroup.Root>
            
        </div>
    )
}