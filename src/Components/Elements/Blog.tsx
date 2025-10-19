
import Blogcard from '../UI/Blogcard'

function Blog() {
  return (
  <div className="Blog text-left flex-col items-baseline mt-20">
    <div className="heading text-2xl font-normal text-white">
        Recent Blogs
    </div>
    <div className="Blog-card-container felx-col tiems-baseline ml-10 mt-2 ">
        <Blogcard
            date='12 august 2025'
            title='The recent hack i got to imprve my code.'
            description='Few AI and libraries i found to refine my code more better then i code.'
        />
        <Blogcard
            date='12 august 2025'
            title='The recent hack i got to imprve my code.'
            description='Few AI and libraries i found to refine my code more better then i code.'
        />


    </div>
  </div>
  )
}

export default Blog
