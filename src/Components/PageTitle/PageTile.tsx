import './PageTitle.css'

export default function PageTitle(props:{title:string, text:string}){
    return(
        <div className='pagetitle-container'>
            <div className="pagetitle-button" >
                <h3 className='pagetitle-title'>{props.title}</h3>
            </div>

            <span className='pagetitle-text'>{props.text}</span>
        </div>

    )
}