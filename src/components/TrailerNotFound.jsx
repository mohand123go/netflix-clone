


const TrailerNotFound = () => {
    const style = {
        textAlign: 'center',
        fontSize: '4rem',
        color: 'red',
        backgroundImage: 'url(blood.png)',
        textShadow: '-65px 47px 5px rgba(146, 0, 0, 0.5)',
        padding: '20px'



    }

    return (<h5 className='notfound' style={style}> Opps Trailer Not Found </h5>);
}

export default TrailerNotFound;