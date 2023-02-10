import BlogCard from './components/BlogCard';
import Header from './Header'


function Home({theme}) {
    const fakeBlog = {
        title: "How CRISPR could help save crops from devastation caused by pests",
        author: "Salal Humair",
        date: "12/21/2022",
        snippet: "Gene editing insects could help reduce reliance on pesticides—and help protect billion-dollar industries.",
        text: "blog text body"
    }

    return (
        <div>
            <Header theme={theme}/>
            <BlogCard theme={theme} blog={ fakeBlog }/>
        </div>
    );
}
export default Home;