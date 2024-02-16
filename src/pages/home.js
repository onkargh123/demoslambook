import withAuth from "@/hocs/withAuth";

const Home = (props)=>{
console.log('props :', props);
    return(<div style = {{color: 'white'}}>Home</div>);
}

export default withAuth(Home);