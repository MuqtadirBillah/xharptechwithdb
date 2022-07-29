function Loader(props){
    return(
        <div className="loader d-flex align-items-center" style={{display: props.display}}>
            <img src="/assets/images/loader.gif" alt="loader-animated" />
        </div>
    )
}

export default Loader;