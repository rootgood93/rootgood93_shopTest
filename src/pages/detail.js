import { useParams } from 'react-router-dom'

function Detail(props){
    let {id} = useParams()
    id = Number(id)
    console.log(typeof id)
    return(
        <div className="list_con">
            <p>{props.shoes[id].title}</p>
            <img src={`/rootgood93_shopTest2/src/img/products0${id+1}.jpg`} />
        </div>
    );
}

export default Detail