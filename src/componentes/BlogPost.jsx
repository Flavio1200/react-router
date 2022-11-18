import { Link, useNavigate, useParams } from 'react-router-dom';
import { blogdata } from './blogdata'

function BlogPost() {
  const { slug } = useParams();
  const navegar = useNavigate()

  const blogpost = blogdata.find(post => post.slug === slug);
    function volver(){
        navegar('/blog') // tambien se puede poner -1 dentro de navegar ya que nos devuelve una busqueda
    }
  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={volver}>volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
    </>
  );
}

export { BlogPost };